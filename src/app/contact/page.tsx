"use client";

import React, { useState } from 'react';
import { type FormEvent } from 'react';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('Message sent successfully!');
                setTimeout(() => {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setStatus('');
                }, 3000);
            } else {
                setStatus(result.error || 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('A network error occurred. Please try again.');
        }
    };

    return (
        <main>
            {/* The background image that was here has been removed */}
            <div className="mx-auto max-w-2xl px-6 py-12 md:py-20">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
                    <p className="text-lg text-textSecondary">
                        Have a project in mind or a question? We'd love to hear from you.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-textSecondary mb-2">Full Name</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required className="block w-full px-4 py-2 bg-cardBackground border border-secondary/50 rounded-md shadow-sm focus:ring-primary focus:border-primary transition" placeholder="Your Name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-textSecondary mb-2">Email Address</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="block w-full px-4 py-2 bg-cardBackground border border-secondary/50 rounded-md shadow-sm focus:ring-primary focus:border-primary transition" placeholder="you@example.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-textSecondary mb-2">Message</label>
                        <textarea id="message" name="message" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} required className="block w-full px-4 py-2 bg-cardBackground border border-secondary/50 rounded-md shadow-sm focus:ring-primary focus:border-primary transition" placeholder="How can we help you?"></textarea>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={status === 'Sending...'}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-background bg-primary hover:bg-primaryHover
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                         disabled:bg-secondary disabled:cursor-not-allowed transition-colors"
                        >
                            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>

                    {status && status !== 'Sending...' && (
                        <p className={`text-center mt-4 ${status.includes('successfully') ? 'text-primary' : 'text-red-500'}`}>
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </main>
    );
}