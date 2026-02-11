import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
} from "firebase/firestore";

const ResourcesManager = () => {
    const [resources, setResources] = useState([]);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("video"); // video, audio, article
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "resources"), (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setResources(data);
        });
        return () => unsubscribe();
    }, []);

    const handleAddResource = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(collection(db, "resources"), {
                title,
                type,
                link,
                description,
                createdAt: new Date(),
            });
            setTitle("");
            setLink("");
            setDescription("");
            alert("Resource added!");
        } catch (error) {
            console.error("Error adding resource: ", error);
            alert("Failed to add resource");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (confirm("Delete this resource?")) {
            await deleteDoc(doc(db, "resources", id));
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Manage Resources</h1>

            <div className="bg-white p-6 rounded shadow mb-8">
                <h2 className="text-xl font-semibold mb-4">Add New Resource</h2>
                <form onSubmit={handleAddResource} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Title (e.g., Glorious King)"
                            className="border p-2 rounded"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <select
                            className="border p-2 rounded"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="video">Video (YouTube/MP4)</option>
                            <option value="audio">Audio (Podcast)</option>
                            <option value="article">Article/PDF</option>
                        </select>
                    </div>
                    <input
                        type="text"
                        placeholder="Link (YouTube URL, Drive Link, or Telegram Link)"
                        className="border p-2 rounded w-full"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Short Description"
                        className="border p-2 rounded w-full"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 disabled:bg-gray-400"
                    >
                        {loading ? "Adding..." : "Add Resource"}
                    </button>
                </form>
            </div>

            {/* List */}
            <div className="bg-white rounded shadow overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Title
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Type
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Link
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {resources.map((res) => (
                            <tr key={res.id}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {res.title}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span className="capitalize px-2 py-1 bg-gray-200 rounded-full text-xs">
                                        {res.type}
                                    </span>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-blue-500 truncate max-w-xs">
                                    <a href={res.link} target="_blank" rel="noopener noreferrer">
                                        {res.link}
                                    </a>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <button
                                        onClick={() => handleDelete(res.id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResourcesManager;
