import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot, deleteDoc, doc, orderBy, query } from "firebase/firestore";

const CommitmentsManager = () => {
    const [commitments, setCommitments] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "sinner_commitments"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setCommitments(data);
        });
        return () => unsubscribe();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this submission?")) {
            await deleteDoc(doc(db, "sinner_commitments", id));
        }
    };

    // Helper to format timestamps
    const formatDate = (timestamp) => {
        if (!timestamp) return "N/A";
        // Handle Firestore Timestamp or standard Date
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Commitment / Sinner's Prayer Submissions</h1>

            <div className="bg-white rounded shadow overflow-hidden overflow-x-auto">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Contact
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                House Fellowship
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Message
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {commitments.length === 0 && (
                            <tr>
                                <td colSpan="6" className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                    No submissions yet.
                                </td>
                            </tr>
                        )}
                        {commitments.map((item) => (
                            <tr key={item.id}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm whitespace-nowrap">
                                    {formatDate(item.createdAt)}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm font-bold">
                                    {item.name}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex flex-col">
                                        <span>{item.email}</span>
                                        <span className="text-gray-500 text-xs">{item.phone}</span>
                                    </div>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {item.location}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm max-w-xs truncate" title={item.message}>
                                    {item.message}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <button
                                        onClick={() => handleDelete(item.id)}
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

export default CommitmentsManager;
