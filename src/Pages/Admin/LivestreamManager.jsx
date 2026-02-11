import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const LivestreamManager = () => {
    const [liveLink, setLiveLink] = useState("");
    const [isLive, setIsLive] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchLiveSettings = async () => {
            const docRef = doc(db, "settings", "livestream");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setLiveLink(data.link || "");
                setIsLive(data.isLive || false);
            }
        };
        fetchLiveSettings();
    }, []);

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await setDoc(doc(db, "settings", "livestream"), {
                link: liveLink,
                isLive: isLive,
                updatedAt: new Date(),
            });
            alert("Live stream settings updated!");
        } catch (error) {
            console.error("Error updating settings: ", error);
            alert("Failed to update settings.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Manage Live Stream</h1>
            <div className="bg-white p-6 rounded shadow max-w-2xl">
                <form onSubmit={handleSave} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">
                            YouTube Embed/Watch Link
                        </label>
                        <input
                            type="text"
                            placeholder="https://www.youtube.com/embed/..."
                            className="w-full border p-2 rounded"
                            value={liveLink}
                            onChange={(e) => setLiveLink(e.target.value)}
                        />
                        <p className="text-sm text-gray-500 mt-1">
                            Paste the full URL of the video or livestream.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="isLive"
                            className="w-5 h-5 text-blue-600"
                            checked={isLive}
                            onChange={(e) => setIsLive(e.target.checked)}
                        />
                        <label htmlFor="isLive" className="text-lg font-medium text-gray-800">
                            Is Live Now?
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`px-6 py-2 rounded text-white font-bold transition ${loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
                            }`}
                    >
                        {loading ? "Saving..." : "Save Settings"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LivestreamManager;
