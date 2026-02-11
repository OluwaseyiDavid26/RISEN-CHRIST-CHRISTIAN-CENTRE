import React, { useState, useEffect } from "react";
import { db, storage } from "../../firebase";
import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const EventsManager = () => {
    const [events, setEvents] = useState([]);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [manualImageUrl, setManualImageUrl] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Real-time subscription to events
        const unsubscribe = onSnapshot(collection(db, "events"), (snapshot) => {
            const eventsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setEvents(eventsData);
        });
        return () => unsubscribe();
    }, []);

    const handleAddEvent = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let finalImageUrl = manualImageUrl;

            // If a file is selected, try to upload it
            if (imageFile) {
                try {
                    const imageRef = ref(storage, `events/${imageFile.name + Date.now()}`);
                    await uploadBytes(imageRef, imageFile);
                    finalImageUrl = await getDownloadURL(imageRef);
                } catch (storageError) {
                    console.error("Storage upload failed (likely due to free plan limits or rules):", storageError);
                    alert("Image upload failed. If you are on the free plan, please use the 'Image URL' option instead.");
                    setLoading(false);
                    return; // Stop execution if upload allows
                }
            }

            await addDoc(collection(db, "events"), {
                title,
                date,
                description,
                image: finalImageUrl,
                createdAt: new Date(),
            });

            // Reset form
            setTitle("");
            setDate("");
            setDescription("");
            setImageFile(null);
            setManualImageUrl("");
            alert("Event added successfully!");
        } catch (error) {
            console.error("Error adding event: ", error);
            alert("Error adding event: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this event?")) {
            try {
                await deleteDoc(doc(db, "events", id));
            } catch (error) {
                console.error("Error deleting event: ", error);
                alert("Failed to delete event: " + error.message);
            }
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Manage Events</h1>

            {/* Add Event Form */}
            <div className="bg-white p-6 rounded shadow mb-8">
                <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
                <form onSubmit={handleAddEvent} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Event Title (e.g., PRAYER)"
                            className="border p-2 rounded"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Event Date (e.g., March 15, 2025)"
                            className="border p-2 rounded"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <textarea
                        placeholder="Description (HTML allowed)"
                        className="border p-2 rounded w-full"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <div className="flex flex-col gap-2 border p-4 rounded bg-gray-50">
                        <label className="text-sm font-bold text-gray-700">Event Image (Choose One)</label>
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <div className="flex-1 w-full">
                                <label className="block text-xs text-gray-500 mb-1">Option A: Upload File</label>
                                <input
                                    type="file"
                                    onChange={(e) => {
                                        setImageFile(e.target.files[0]);
                                        setManualImageUrl(""); // Clear manual URL if file selected
                                    }}
                                    accept="image/*"
                                    className="border p-2 rounded w-full bg-white"
                                />
                            </div>
                            <span className="text-gray-500 font-bold">OR</span>
                            <div className="flex-1 w-full">
                                <label className="block text-xs text-gray-500 mb-1">Option B: Paste Image URL</label>
                                <input
                                    type="text"
                                    placeholder="https://example.com/image.jpg"
                                    className="border p-2 rounded w-full"
                                    value={manualImageUrl}
                                    onChange={(e) => {
                                        setManualImageUrl(e.target.value);
                                        setImageFile(null); // Clear file if URL entered
                                    }}
                                />
                                <p className="text-xs text-blue-500 mt-1">
                                    Tip: You can upload images to <a href="https://postimages.org/" target="_blank" rel="noopener noreferrer" className="underline font-bold">PostImages</a>. After uploading, copy the <b>"Direct Link"</b> and paste it here.
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 w-full md:w-auto"
                    >
                        {loading ? "Saving..." : "Add Event"}
                    </button>
                </form>
            </div>

            {/* Events List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <div key={event.id} className="bg-white rounded shadow overflow-hidden">
                        <div className="h-48 overflow-hidden bg-gray-200">
                            {event.image ? (
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-500">No Image</div>
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg">{event.title}</h3>
                            <p className="text-sm text-gray-500">{event.date}</p>
                            <p
                                className="text-gray-700 mt-2 text-sm"
                                dangerouslySetInnerHTML={{ __html: event.description }}
                            />
                            <button
                                onClick={() => handleDelete(event.id)}
                                className="mt-4 bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsManager;
