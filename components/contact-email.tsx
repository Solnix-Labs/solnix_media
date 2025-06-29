'use client'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'
import { useState, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Vortex } from './ui/vortex';
import { PinContainer } from './ui/3d-pin';
import LoadingSpinner from './loading-spinner';
import { ErrorBoundary } from './error-boundary';
import { IconBrandWhatsapp } from '@tabler/icons-react';

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

interface ValidationErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export default function ContactEmail(): React.ReactElement {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

    const validateForm = useCallback((): ValidationErrors => {
        const errors: ValidationErrors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
        } else if (formData.subject.trim().length < 5) {
            errors.subject = 'Subject must be at least 5 characters';
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            errors.message = 'Message must be at least 10 characters';
        }

        return errors;
    }, [formData]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear validation error when user starts typing
        if (validationErrors[name as keyof ValidationErrors]) {
            setValidationErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    }, [validationErrors]);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        setLoading(true);
        setResult(null);
        setError(null);
        setValidationErrors({});

        try {
            // Using Formspree as a static-friendly form handler
            // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
            const res = await fetch('https://formspree.io/f/xeokvwwd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            if (!res.ok) {
                const err = await res.text();
                throw new Error(err || 'Something went wrong');
            }

            setResult("Thank you for reaching out! We will contact you soon.");
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            // Track successful form submission
            if (typeof window !== 'undefined' && 'gtag' in window) {
                // @ts-expect-error gtag is a global function added by Google Analytics
                window.gtag('event', 'form_submit', {
                    event_category: 'Contact',
                    event_label: 'Contact Form',
                });
            }

        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'Network error occurred';
            setError(errorMessage);

            // Track form errors
            if (typeof window !== 'undefined' && 'gtag' in window) {
                // @ts-expect-error gtag is a global function added by Google Analytics
                window.gtag('event', 'form_error', {
                    event_category: 'Contact',
                    event_label: errorMessage,
                });
            }
        } finally {
            setLoading(false);
        }
    }, [formData, validateForm]);

    return (
        <ErrorBoundary>
            <Vortex
                backgroundColor="transparent"
                rangeY={800}
                particleCount={200}
                baseHue={120}
                className="flex items-center flex-col justify-center w-full"
            >
                <div className="w-full">
                    {/* Hero section with improved spacing */}
                    <section className="py-16 md:py-20">
                        <div className="container px-4 mx-auto">
                            <div className="max-w-3xl mx-auto text-center">
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Get In Touch</h1>
                                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                                    Have questions about our services or want to start a project? We are here to help.
                                    Our team is ready to answer your questions and provide the solutions you need.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Contact section with form and 3D pin */}
                    <div className="container mx-auto px-4 pb-24">
                        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center max-w-6xl mx-auto space-y-12 lg:space-y-0">
                            {/* Contact Form with enhanced styling */}
                            <div className="w-full order-1 lg:order-1 relative z-10">
                                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200/20 transition-all duration-300 hover:shadow-xl">
                                    <h2 className="text-2xl font-semibold mb-6 text-primary">Send Us a Message</h2>
                                    <form onSubmit={handleSubmit} noValidate>
                                        <div className="space-y-5">
                                            <div>
                                                <Label htmlFor="name" className="text-sm font-medium">
                                                    Full Name <span className="text-destructive">*</span>
                                                </Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    placeholder="Your name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    aria-invalid={!!validationErrors.name}
                                                    aria-describedby={validationErrors.name ? "name-error" : undefined}
                                                    className={`mt-1 ${validationErrors.name ? 'border-destructive focus:border-destructive' : ''}`}
                                                />
                                                {validationErrors.name && (
                                                    <p id="name-error" className="text-sm text-destructive mt-1">{validationErrors.name}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="email" className="text-sm font-medium">
                                                    Email Address <span className="text-destructive">*</span>
                                                </Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Your email address"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    aria-invalid={!!validationErrors.email}
                                                    aria-describedby={validationErrors.email ? "email-error" : undefined}
                                                    className={`mt-1 ${validationErrors.email ? 'border-destructive focus:border-destructive' : ''}`}
                                                />
                                                {validationErrors.email && (
                                                    <p id="email-error" className="text-sm text-destructive mt-1">{validationErrors.email}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="Your phone number (optional)"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="mt-1"
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="subject" className="text-sm font-medium">
                                                    Subject <span className="text-destructive">*</span>
                                                </Label>
                                                <Input
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="What is this regarding?"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    aria-invalid={!!validationErrors.subject}
                                                    aria-describedby={validationErrors.subject ? "subject-error" : undefined}
                                                    className={`mt-1 ${validationErrors.subject ? 'border-destructive focus:border-destructive' : ''}`}
                                                />
                                                {validationErrors.subject && (
                                                    <p id="subject-error" className="text-sm text-destructive mt-1">{validationErrors.subject}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="message" className="text-sm font-medium">
                                                    Your Message <span className="text-destructive">*</span>
                                                </Label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    placeholder="Tell us how we can help you"
                                                    className={`min-h-[140px] mt-1 ${validationErrors.message ? 'border-destructive focus:border-destructive' : ''}`}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    aria-invalid={!!validationErrors.message}
                                                    aria-describedby={validationErrors.message ? "message-error" : undefined}
                                                />
                                                {validationErrors.message && (
                                                    <p id="message-error" className="text-sm text-destructive mt-1">{validationErrors.message}</p>
                                                )}
                                            </div>

                                            <Button
                                                type="submit"
                                                className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-all"
                                                disabled={loading}
                                            >
                                                {loading ? (
                                                    <>
                                                        <LoadingSpinner size="sm" className="mr-2" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send className="ml-2 h-4 w-4" />
                                                    </>
                                                )}
                                            </Button>
                                        </div>

                                        <div className="mt-4 min-h-[24px]">
                                            {result && (
                                                <div className="text-green-600 dark:text-green-400 text-sm font-medium p-3 rounded-md bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                                                    {result}
                                                </div>
                                            )}
                                            {error && (
                                                <div className="text-red-600 dark:text-red-400 text-sm font-medium p-3 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                                                    {error}
                                                </div>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Pin Container replaced with a fully-functional WhatsApp button */}
                            <div className="w-full order-2 lg:order-2 flex items-center justify-center relative z-0">
                                {(() => {
                                    // WhatsApp helper variables
                                    const whatsappNumber = "919876543210"; // TODO: replace with real number or env var
                                    const whatsappMessage = "Hello Solnix Media, I'm interested in your services.";
                                    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

                                    return (
                                        <div className="transform hover:scale-105 transition-all duration-300 w-full max-w-sm mx-auto lg:max-w-none">
                                            {/* Desktop / tablet */}
                                            <div className="hidden sm:block">
                                                <PinContainer
                                                    title="Chat with us on WhatsApp"
                                                    href={whatsappLink}
                                                    newTab
                                                >
                                                    <div className="flex basis-full flex-col p-6 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] lg:w-[22rem] lg:h-[22rem] bg-gradient-to-br from-green-500 to-emerald-700 backdrop-blur-md rounded-xl border border-emerald-300/20">
                                                        <div className="flex items-center space-x-3">
                                                            <IconBrandWhatsapp size={32} className="text-white" />
                                                            <h3 className="!m-0 font-bold text-2xl text-white">WhatsApp</h3>
                                                        </div>
                                                        <div className="text-sm !m-0 !p-0 font-normal mt-4">
                                                            <span className="text-white/80">
                                                                Click to start a chat with our team instantly.
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-1 w-full rounded-lg mt-6 bg-black/20 overflow-hidden items-center justify-center">
                                                            <span className="text-white text-lg font-semibold text-center px-4 py-2">Start Conversation</span>
                                                        </div>
                                                    </div>
                                                </PinContainer>
                                            </div>

                                            {/* Mobile fallback */}
                                            <div className="block sm:hidden bg-gradient-to-br from-green-500 to-emerald-700 backdrop-blur-md rounded-xl border border-emerald-300/20 p-6 text-center">
                                                <a
                                                    href={whatsappLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex flex-col items-center space-y-4"
                                                >
                                                    <IconBrandWhatsapp size={40} className="text-white" />
                                                    <span className="text-white font-bold text-lg">Chat on WhatsApp</span>
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
            </Vortex>
        </ErrorBoundary>
    );
}
