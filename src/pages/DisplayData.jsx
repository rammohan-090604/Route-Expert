import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/contact.css';

const DisplayData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://mts-backend-4hmu.onrender.com/api/data');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error(<p>Error fetching data.</p>, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                className: "toast-custom", // Apply custom class
              });
        } finally {
            setLoading(false); // End loading after data fetch
        }
    };

    const markAsChecked = async (id) => {
        try {
            const response = await fetch('https://mts-backend-4hmu.onrender.com/api/updateChecked', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            if (response.ok) {
                // Optionally, refresh the data after update
                fetchData();
                toast.success(<p>Checked status updated successfully!</p>, {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: true,
                    className: 'toast-custom',
                });
            } else {
                throw new Error('Failed to update checked status');
            }
        } catch (error) {
            console.error('Error updating checked status:', error);
            toast.error(<p>Error updating checked status.</p>, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                className: "toast-custom", 
              });
        }
    };

    return (
        <div className="container mx-auto p-8 pt-12 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-5xl mt-20 mb-20 font-bold text-center text-blue-600 mb-8">Data Table</h1>

            {/* Loading spinner or message */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="flex space-x-2">
                        <div className="bg-blue-500 p-2 w-4 h-4 rounded-full animate-bounce"></div>
                        <div className="bg-blue-500 p-2 w-4 h-4 rounded-full animate-bounce delay-200"></div>
                        <div className="bg-blue-500 p-2 w-4 h-4 rounded-full animate-bounce delay-400"></div>
                    </div>
                </div>
            ) : data.length === 0 ? (
                // Display "No Data" image if no data is retrieved
                <div className="flex flex-col justify-center items-center">
                    <img
                        src="https://i.ibb.co/cXtvhLm/Designer-1.jpg"
                        alt="No data"
                        className="mt-12 mb-8"
                    />
                    <p className="text-blue-600 font-bold text-2xl">No data received yet</p>
                </div>
            ) : (
                <div className="overflow-x-auto mt-16">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-blue-600 text-white text-left">
                                <th className="py-3 px-6 font-semibold text-sm uppercase">Name</th>
                                <th className="py-3 px-6 font-semibold text-sm uppercase">Interested Course</th>
                                <th className="py-3 px-6 font-semibold text-sm uppercase">Query</th>
                                <th className="py-3 px-6 font-semibold text-sm uppercase">Phone Number</th>
                                <th className="py-3 px-6 font-semibold text-sm uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item._id} className="even:bg-blue-50">
                                    <td className="py-4 px-6 border-b border-blue-200">{item.name}</td>
                                    <td className="py-4 px-6 border-b border-blue-200">{item.courses}</td>
                                    <td className="py-4 px-6 border-b border-blue-200">{item.query}</td>
                                    <td className="py-4 px-6 border-b border-blue-200">{item.phone}</td>
                                    <td className="py-4 px-6 border-b border-blue-200">
                                        <button
                                            onClick={() => markAsChecked(item._id)}
                                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                        >
                                            Checked
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Toast container for showing notifications */}
            <ToastContainer />
        </div>
    );
};

export default DisplayData;
