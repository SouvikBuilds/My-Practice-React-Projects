import React, { useEffect, useState } from 'react';

const Container = () => {
    const [allContacts, setAllContacts] = useState(() => {
        return JSON.parse(localStorage.getItem("allContacts")) || [];
    });
    const [inputName, setInputName] = useState("");
    const [phone, setPhone] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [showFavourites, setShowFavourites] = useState(false);

    useEffect(() => {
        localStorage.setItem('allContacts', JSON.stringify(allContacts));
    }, [allContacts]); // ✅ dependency array

    const addContact = () => {
        if (!inputName || !phone || !inputEmail) {
            alert("Please fill all details");
            return;
        }
        if (phone.trim().length !== 10) {
            alert("Invalid phone number");
            return;
        }

        const contactDetails = {
            userId: Date.now(),
            Name: inputName,
            ContactNo: phone,
            Email: inputEmail,
            isEdited: false,
            isFavourite: false // ✅ spelling fixed
        };
        setAllContacts([...allContacts, contactDetails]);

        setInputName("");
        setInputEmail("");
        setPhone("");
    };

    const deleteContact = (id) => {
        if (confirm("Are You Sure?")) {
            setAllContacts(allContacts.filter(contact => contact.userId !== id));
        }
    };

    const editContact = (id) => {
        if (!confirm("Are You Sure?")) return;

        const contactToEdit = allContacts.find(contact => contact.userId === id);
        if (!contactToEdit) return;

        const newName = prompt("Enter New Name", contactToEdit.Name) || contactToEdit.Name;
        const newPhone = prompt("Enter New Contact", contactToEdit.ContactNo) || contactToEdit.ContactNo;
        const newEmail = prompt("Enter New Email Id", contactToEdit.Email) || contactToEdit.Email;

        setAllContacts(prevContacts =>
            prevContacts.map(contact =>
                contact.userId === id
                    ? {
                        ...contact,
                        Name: newName,
                        ContactNo: newPhone,
                        Email: newEmail,
                        isEdited: true
                    }
                    : contact
            )
        );
    };

    const favouriteContact = (id) => {
        if (!confirm("Are You Sure?")) return;

        setAllContacts(prevContacts =>
            prevContacts.map(contact =>
                contact.userId === id
                    ? { ...contact, isFavourite: !contact.isFavourite }
                    : contact
            )
        );
    };

    const filteredContacts = showFavourites
        ? allContacts.filter(contact => contact.isFavourite)
        : allContacts;

    return (
        <div className='container flex flex-col bg-[#333] w-[90vw] max-w-[800px] min-w-[320px] justify-center items-center rounded-lg shadow-lg p-3 sm:p-5 m-auto mt-[5%] sm:mt-[10%]'>
            <h1 className='text-2xl sm:text-3xl text-white animate-bounce text-center'>
                CONTACT MANAGER
            </h1>

            {/* Form */}
            <div className="formGroup flex flex-col gap-4 mt-5 w-full max-w-[480px]">
                <div>
                    <label className='text-white text-[18px] sm:text-[20px]'>Name:</label><br />
                    <input
                        type="text"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        placeholder='Enter Name Here'
                        className='w-full px-4 py-2 rounded-lg shadow-lg mt-2'
                    />
                </div>
                <div>
                    <label className='text-white text-[18px] sm:text-[20px]'>Phone Number:</label><br />
                    <input
                        type='number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder='Enter Phone No Here'
                        className='w-full px-4 py-2 rounded-lg shadow-lg mt-2'
                    />
                </div>
                <div>
                    <label className='text-white text-[18px] sm:text-[20px]'>Email Id:</label><br />
                    <input
                        type='email'
                        value={inputEmail}
                        onChange={(e) => setInputEmail(e.target.value)}
                        placeholder='Enter Email Id Here'
                        className='w-full px-4 py-2 rounded-lg shadow-lg mt-2'
                    />
                </div>
            </div>

            {/* Buttons */}
            <div className="button flex gap-3 mt-4">
                <button onClick={addContact} className='bg-red-500 text-white px-5 py-2 rounded-lg shadow-lg'>
                    Add Contact
                </button>
                <button onClick={() => setShowFavourites(!showFavourites)} className='bg-blue-500 text-white px-5 py-2 rounded-lg shadow-lg'>
                    {showFavourites ? "Show All" : "Favourites"}
                </button>
            </div>

            {/* Table */}
            <div className="userDetails text-white mt-8 w-full overflow-x-auto">
                <table className='w-full border-collapse bg-[#444] rounded-lg overflow-hidden shadow-lg'>
                    <thead>
                        <tr className='bg-[#555]'>
                            <th className='px-4 py-3 text-left border-b border-[#666]'>Name</th>
                            <th className='px-4 py-3 text-left border-b border-[#666]'>Contact Number</th>
                            <th className='px-4 py-3 text-left border-b border-[#666] hidden sm:table-cell'>Email</th>
                            <th className='px-4 py-3 text-center border-b border-[#666]'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredContacts.map(contact => (
                            <tr key={contact.userId} className='hover:bg-[#555]'>
                                <td className='px-4 py-3 border-b border-[#666]'>{contact.Name}</td>
                                <td className='px-4 py-3 border-b border-[#666]'>{contact.ContactNo}</td>
                                <td className='px-4 py-3 border-b border-[#666] hidden sm:table-cell'>{contact.Email}</td>
                                <td className='px-4 py-3 border-b border-[#666]'>
                                    <div className="buttons flex flex-col sm:flex-row gap-2 justify-center">
                                        <button onClick={() => editContact(contact.userId)} className='bg-blue-500 text-white px-4 py-1 rounded-lg shadow-lg'>
                                            Edit
                                        </button>
                                        <button onClick={() => deleteContact(contact.userId)} className='bg-red-500 text-white px-4 py-1 rounded-lg shadow-lg'>
                                            Delete
                                        </button>
                                        <button onClick={() => favouriteContact(contact.userId)} className='bg-white px-4 py-1 rounded-lg shadow-lg'>
                                            <img
                                                src={contact.isFavourite
                                                    ? "https://cdn-icons-png.flaticon.com/128/9484/9484251.png"
                                                    : "https://cdn-icons-png.flaticon.com/128/1077/1077035.png"}
                                                alt="Fav"
                                                className='h-5'
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Container;
