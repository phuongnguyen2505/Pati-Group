import React from 'react'

export default function CliniciansChoice({ show, onClose }) {
    return (
        <div className={`flex gap-4 mt-2 relative max-w-md transition-all ${show ? 'visible' : 'invisible'}`}>
            <div className="flex items-center justify-center gap-4">
                <div className="relative h-10 flex-shrink-0 gap-1 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="35" viewBox="0 0 17 35" fill="#000">
                        <path d="M2.60396 10.0782C2.63019 12.7275 5.0681 14.8472 5.0681 14.8472C5.0681 14.8472 7.46457 12.6717 7.43993 10.0222C7.41325 7.3697 4.97398 5.25178 4.97398 5.25178C4.97398 5.25178 2.57932 7.42863 2.60396 10.0782ZM1.34556 19.1722C2.78927 21.3977 5.99278 21.9007 5.99278 21.9007C5.99278 21.9007 6.85625 18.7951 5.41254 16.5696C3.96883 14.3441 0.763495 13.8397 0.763495 13.8397C0.763495 13.8397 -0.0997442 16.9469 1.34556 19.1722ZM3.82901 27.3622C6.16621 28.6381 9.23028 27.5709 9.23028 27.5709C9.23028 27.5709 8.50337 24.4335 6.16618 23.1576C3.82898 21.8817 0.764911 22.9489 0.764911 22.9489C0.764911 22.9489 1.49182 26.0862 3.82901 27.3622ZM10.5368 33.3638C13.0903 34.1327 15.868 32.4611 15.868 32.4611C15.868 32.4611 14.504 29.5425 11.9502 28.772C9.39665 28.0031 6.62082 29.6761 6.62082 29.6761C6.62082 29.6761 7.98323 32.5949 10.5368 33.3638ZM9.02056 3.29033C7.3448 5.35644 7.8659 8.53241 7.8659 8.53241C7.8659 8.53241 11.1079 8.36114 12.7836 6.29503C14.4594 4.22891 13.9381 1.05136 13.9381 1.05136C13.9381 1.05136 10.6963 1.22421 9.02056 3.29033Z"
                            stroke="#212121"
                            strokeLinecap="round">
                        </path>
                    </svg>
                    <span className="text-base font-lora text-center text-black leading-tight whitespace-nowrap">
                        Clinicians'<br />Choice
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="35" viewBox="0 0 17 35" fill="#000">
                        <path d="M14.1756 10.0782C14.1494 12.7275 11.7114 14.8472 11.7114 14.8472C11.7114 14.8472 9.31497 12.6717 9.33961 10.0222C9.36629 7.3697 11.8056 5.25178 11.8056 5.25178C11.8056 5.25178 14.2002 7.42863 14.1756 10.0782ZM15.434 19.1722C13.9903 21.3977 10.7868 21.9007 10.7868 21.9007C10.7868 21.9007 9.92329 18.7951 11.367 16.5696C12.8107 14.3441 16.016 13.8397 16.016 13.8397C16.016 13.8397 16.8793 16.9469 15.434 19.1722ZM12.9505 27.3622C10.6133 28.6381 7.54926 27.5709 7.54926 27.5709C7.54926 27.5709 8.27617 24.4335 10.6134 23.1576C12.9506 21.8817 16.0146 22.9489 16.0146 22.9489C16.0146 22.9489 15.2877 26.0862 12.9505 27.3622ZM6.24277 33.3638C3.68923 34.1327 0.911591 32.4611 0.911591 32.4611C0.911591 32.4611 2.27559 29.5425 4.82935 28.772C7.38289 28.0031 10.1587 29.6761 10.1587 29.6761C10.1587 29.6761 8.79631 32.5949 6.24277 33.3638ZM7.75898 3.29033C9.43474 5.35644 8.91365 8.53241 8.91365 8.53241C8.91365 8.53241 5.67166 8.36114 3.9959 6.29503C2.32014 4.22891 2.84146 1.05136 2.84146 1.05136C2.84146 1.05136 6.08322 1.22421 7.75898 3.29033Z"
                            stroke="#212121"
                            strokeLinecap="round">
                        </path>
                    </svg>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-1">
                    <p className="text-[13px] text-gray-700 leading-tight">
                        <span className="font-bold text-black">336 clinicians</span> share this on <span className="italic tracking-tighter">FrontrowMD</span>
                        <br />without compensation. <a href="#" className="underline cursor-pointer hover:text-gray-900">Learn more</a>
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                        <div className="flex -space-x-1">
                            <img className="inline-block h-4 w-4 rounded-full ring-1 ring-white object-cover" src="https://i.pravatar.cc/30?img=1" alt="Clinician 1" />
                            <img className="inline-block h-4 w-4 rounded-full ring-1 ring-white object-cover" src="https://i.pravatar.cc/30?img=2" alt="Clinician 2" />
                            <img className="inline-block h-4 w-4 rounded-full ring-1 ring-white object-cover" src="https://i.pravatar.cc/30?img=3" alt="Clinician 3" />
                        </div>
                        <a href="#" className="text-sm font-medium text-gray-700 hover:underline">Read their reviews</a>
                    </div>
                </div>
            </div>
            <button
                className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 leading-none"
                onClick={onClose}
            >
                ×
            </button>
        </div>
    )
}
