import React, { useState } from 'react';
import './internship-tracker.css';

async function getListings() {
    const address = "https://raw.githubusercontent.com/khaled-elakkad/job-listings/refs/heads/master/db.json"
    try {
        const response = await fetch(address);
        if (!response.ok) {
            throw 
        }
    }
}

export default function InternshipTracker() {
    const [text, setText] = useState('Do you have an internship?');
    const [hasInternship, setHasInternship] = useState(-1);


    const changeText = () => setText('Text has been changed!');

    HandleInternClick = (code) => {
        code ? setText("Congrats bruh") : setText("Here are some listings");
        setHasInternship(code);
    }


    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg">
        <div className="text-center space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Empty Component</h2>

            <div className="text-2xl font-bold text-blue-600">
            {text}
            </div>

            <div className="flex justify-center">
            { hasInternship === -1 &&
                <>
                <button
                    onClick={()=>{handleInternClick(1)}}
                    className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                >
                    Yes
                </button>

                <button
                    onClick={()=>{handleInternClick(0)}}
                    className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                >
                    No
                </button>
                </>
            }

            { hasInternship === 1 &&
                
            }

            { hasInternship === 0 && 
                
            }

            </div>
        </div>
        </div>
    );

}
