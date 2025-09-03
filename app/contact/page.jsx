import { ContactForm } from 'components/ContactForm';

export const metadata = {
    title: 'Contact'
};

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Contact</h1>
            <p className="mb-8 text-neutral-600">
                Get in touch with us using the form below. We&apos;d love to hear from you!
            </p>
            <div className="flex justify-center">
                <ContactForm />
            </div>
        </>
    );
}