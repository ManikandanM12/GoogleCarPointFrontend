import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          Terms of Service
        </h1>

        <p className="text-md text-gray-600 mb-8 text-center">
          Last updated: April 7, 2025
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the services provided by <strong>Google Car Point</strong>, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">2. Services Offered</h2>
          <p>
            We provide vehicle maintenance and repair services, including oil changes, brake repairs, full car service, electrical work, AC service, and other auto-related services. Details of services, timelines, and pricing are subject to change without prior notice.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">3. Booking & Appointments</h2>
          <p>
            Customers can book services through our website or by phone. Appointment times are subject to availability. We strive to adhere to all bookings but reserve the right to reschedule due to emergencies or technical issues.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
          <p>
            All services must be paid in full upon completion unless otherwise agreed upon. We accept UPI, cash, and online payments. In case of any billing issues, customers should contact us within 7 days.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">5. Warranty & Liability</h2>
          <p>
            We offer a limited warranty on certain parts and services as disclosed during the job. We are not liable for damages caused by pre-existing vehicle conditions or for loss of personal items left in the vehicle.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">6. Cancellations & Refunds</h2>
          <p>
            You may cancel an appointment 24 hours in advance without any charge. Refunds are processed on a case-by-case basis for services not rendered. No refunds will be issued for completed services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">7. Customer Responsibilities</h2>
          <p>
            Customers must provide accurate information about their vehicle and its condition. It is the customer's responsibility to retrieve the vehicle once service is complete. Unclaimed vehicles may incur storage charges.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">8. Privacy</h2>
          <p>
            We value your privacy. Personal data collected during appointment booking or service records is stored securely and never shared with third parties without your consent. Refer to our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> for more information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Any changes will be posted on this page, and your continued use of our services signifies your agreement to the updated terms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p>
            If you have questions or concerns about these Terms, you can contact us at:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Email: support@googlecarpoint.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Workshop: No. 123, Anna Salai, Chennai, Tamil Nadu</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
