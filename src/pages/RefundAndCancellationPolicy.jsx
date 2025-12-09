import React from 'react';
import LegalPage from './LegalPage';

const content = (
  <>
    <p>STARTWORKS TECHNOLOGIES PRIVATE LIMITED (CIN: U72200AP2022PTC123413) ("STARTWORKS","we," "us," or "our"), a company incorporated under the laws of India with its registered office at 37ABJCS8459E1ZT STARTWORKS TECHNOLOGIES PRIVATE LIMITED PLOT NO. 19-20, Floor 2, HILL VIEW PARADISE, MADHURAWADA, Madhurawada, Visakhapatnam, Andhra Pradesh,530048, operates Equibudx ("Platform"), an online marketplace that connects third-party Service Providers with Buyers for services such as event tickets, experiential bookings, and consultations. We are dedicated to fostering trust and transparency in every transaction.</p>
    <p>This Refund and Cancellation Policy ("Policy") sets forth the terms governing cancellations and refunds for all Bookings made through our Services, including the website equibudx.com/equibudx.in mobile applications (iOS and Android), and related tools (collectively, the "Services"). This Policy is an integral part of our Terms and Conditions ("Terms") and applies uniformly to all Users, including Buyers and Service Providers.</p>
    <p>As a technology intermediary under Section $2(1)(w)$ of the Information Technology Act, 2000 ("IT Act"), we facilitate interactions and payments but do not provide, endorse, or guarantee any services. The underlying contract for service delivery remains between the Buyer and Service Provider, and all refunds are processed in accordance with this Policy, applicable laws, and the specific terms displayed at the time of Booking.</p>
    <p>This Policy adheres to the Consumer Protection Act, 2019 ("CPA"), the Consumer Protection (E-Commerce) Rules, 2020, the Reserve Bank of India ("RBI") Master Directions on Payment Aggregators, and other relevant regulations. All refunds are handled securely and compliantly through our integrated payment gateway, Cashfree Payments India Pvt. Ltd. ("Cashfree"). We do not store, access, or process full financial details; such data is managed exclusively by Cashfree in a PCI DSS-compliant environment.</p>
    <p>By using the Services, you agree to this Policy. If you have any questions, concerns, or require assistance, please contact our support team at support@equibudx.com (available Monday to Saturday, 9:00 AM to 6:00 PM IST).</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">1. Applicability and Key Principles</h2>
    <p>This Policy applies to all confirmed Bookings processed via the Platform and is designed to balance Buyer protection with Service Provider commitments, ensuring fairness and efficiency.</p>
    
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">1.1 Scope</h3>
    <ul className="list-disc ml-6 space-y-2">
      <li>Covers all services listed by third-party Service Providers, including but not limited to events, workshops, consultations, and experiential activities.</li>
      <li>Does not apply to off-Platform transactions, direct payments to Service Providers, or third-party fees (e.g., bank surcharges or international transaction levies).</li>
    </ul>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">1.2 Key Principles</h3>
    <ul className="list-disc ml-6 space-y-2">
      <li>Non-Refundable Elements: Convenience fees, payment gateway charges, or processing fees (up to 2% of the Booking amount, as disclosed at checkout) are non-refundable to cover operational costs.</li>
      <li>Currency: All transactions and refunds are denominated in Indian Rupees (INR).</li>
      <li>Taxes: Eligible refunds include any applicable taxes (e.g., GST at prevailing rates) that were collected at Booking. Service Providers are solely responsible for their tax compliance and remittance obligations.</li>
      <li>Request Process: Cancellations and refund requests must be submitted exclusively through the Platform's user dashboard, mobile app, or official support channels. We do not accept verbal, email-only, or third-party requests to prevent fraud.</li>
      <li>Evidence Requirements: For disputed cases, Users must provide verifiable proof (e.g., medical certificates, screenshots) within specified timelines.</li>
    </ul>
    <p>We reserve the right to amend this Policy at any time to reflect legal, operational, or business changes. Amendments will be posted on the Platform with the updated "Last Updated" date, and material changes (e.g., revised refund percentages) will be notified via email or in-app alerts at least 30 days in advance. Your continued use of the Services after such notice constitutes acceptance.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">2. Buyer-Initiated Cancellations and Refunds</h2>
    <p>Buyers may initiate cancellations at any time prior to the Service Fulfillment Date (the scheduled date and time of service delivery), subject to the refund schedule below. This tiered structure accounts for Service Provider preparation and opportunity costs while prioritizing early cancellations.</p>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">2.1 Refund Schedule</h3>
    <p>The following table outlines eligibility based on the timing of the cancellation request relative to Booking confirmation and the Service Fulfillment Date:</p>
    
    <table className="table-auto w-full border border-border mt-4 mb-6">
        <thead className="bg-muted text-left">
            <tr>
                <th className="p-2 border-b border-border">Cancellation Window</th>
                <th className="p-2 border-b border-border">Refund Eligibility</th>
                <th className="p-2 border-b border-border">Conditions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="p-2 border-b border-border">Within 24 hours of Booking Confirmation</td>
                <td className="p-2 border-b border-border">100% of the Booking amount (excluding non-refundable fees)</td>
                <td className="p-2 border-b border-border">Automatic full refund for errors, changes of mind, or unforeseen issues. Processed without question.</td>
            </tr>
            <tr>
                <td className="p-2 border-b border-border">After 24 hours from Booking Confirmation but more than 24 hours before Service Fulfillment Date</td>
                <td className="p-2 border-b border-border">50% of the Booking amount (excluding non-refundable fees)</td>
                <td className="p-2 border-b border-border">Partial refund to acknowledge Service Provider's incurred costs (e.g., inventory allocation). A valid reason (e.g., scheduling conflict) is recommended but not mandatory.</td>
            </tr>
            <tr>
                <td className="p-2 border-b border-border">Within 24 hours of Service Fulfillment Date (Last-Minute Cancellation)</td>
                <td className="p-2 border-b border-border">0% Refund</td>
                <td className="p-2 border-b border-border">No monetary refund due to high preparation and revenue loss for Service Providers. Rescheduling may be offered at the Service Provider's discretion, potentially with a fee.</td>
            </tr>
            <tr>
                <td className="p-2 border-b border-border">Buyer No-Show (Neither In-Person Nor Virtually)</td>
                <td className="p-2 border-b border-border">0% Refund</td>
                <td className="p-2 border-b border-border">Buyer assumes full responsibility for attendance. Service Providers may provide goodwill credits for future Bookings at their sole discretion. Repeated no-shows may result in account suspension or restrictions.</td>
            </tr>
        </tbody>
    </table>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">2.2 How to Initiate a Cancellation</h3>
    <ol className="list-decimal ml-6 space-y-2">
      <li>Log in to your Platform account via the website or app.</li>
      <li>Navigate to "My Bookings" and select the relevant Booking.</li>
      <li>Click "Cancel Booking" and follow the prompts to confirm.</li>
      <li>Receive an instant confirmation email or SMS with details, including estimated refund amount and timeline.</li>
    </ol>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">2.3 Disputes and Exceptions</h3>
    <ul className="list-disc ml-6 space-y-2">
      <li>If you believe the standard policy does not apply (e.g., due to a medical emergency, flight delay, or Service Provider misrepresentation), submit a support ticket within 7 days of the Service Fulfillment Date, including supporting evidence (e.g., doctor's note, airline confirmation).</li>
      <li>Our dedicated support team will review and mediate within 5-7 business days. Decisions are final but may include goodwill gestures (e.g., partial credit).</li>
      <li>For group or multi-attendee Bookings, cancellations are prorated per individual; full refunds require all attendees to opt out within the applicable window.</li>
    </ul>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">3. Service Provider-Initiated Cancellations</h2>
    <p>Service Providers are encouraged to honor all confirmed Bookings but may cancel under exceptional circumstances (e.g., illness, venue issues, or technical failures). Cancellations must be initiated via the Platform dashboard at least 24 hours before the Service Fulfillment Date (or immediately upon discovery in emergencies).</p>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">3.1 Remedies for Affected Buyers</h3>
    <p>Upon a Service Provider-initiated cancellation, the Buyer is entitled to one of the following options, provided at no additional cost:</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>100% Refund of the full Booking amount (excluding non-refundable fees), processed per Section 4; or</li>
      <li>Complimentary Rescheduling to an equivalent or comparable service slot, subject to availability (Buyer must confirm within 14 days).</li>
    </ul>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">3.2 Service Provider Obligations</h3>
    <ul className="list-disc ml-6 space-y-2">
      <li>Provide immediate notification to the Platform and Buyer via the dashboard messaging system.</li>
      <li>Offer reasonable alternatives to minimize inconvenience.</li>
      <li>Repeated cancellations (e.g., exceeding 5% of total Bookings in a quarter) may result in payout holds, listing suspensions, or account termination, at our discretion.</li>
    </ul>
    <p>In cases of overbooking due to Platform errors, we will prioritize full refunds or premium alternatives.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">4. Refund Processing</h2>
    <p>Refunds are a core commitment to User satisfaction and are processed efficiently and securely.</p>
    
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">4.1 Timeline and Method</h3>
    <ul className="list-disc ml-6 space-y-2">
      <li>Initiation: Eligible refunds are approved and initiated within 48 hours of the cancellation confirmation.</li>
      <li>Crediting: Funds are credited to the original payment method (e.g., credit/debit card, UPI, net banking, or digital wallet) within 7-10 business days. International transactions may take up to 15 business days due to cross-border processing.</li>
      <li>Tracking: Monitor status in your account dashboard under "My Transactions" or via email updates from Cashfree.</li>
      <li>Cashfree Terms: By accepting this Policy, you agree to Cashfree's refund procedures, which may involve additional verification for security.</li>
    </ul>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">4.2 Handling Failed or Delayed Refunds</h3>
    <ul className="list-disc ml-6 space-y-2">
      <li>If a refund fails (e.g., due to an expired card or closed bank account), we will notify you via email and allow one reprocessing request with updated details (valid for 30 days).</li>
      <li>Delays beyond 10 business days should be escalated directly to Cashfree support (details provided in notifications); we will assist in follow-ups but cannot control third-party timelines.</li>
    </ul>
    
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">4.3 Exclusions</h3>
    <ul className="list-disc ml-6 space-y-2">
      <li>We are not liable for refunds on payments made directly to Service Providers outside the Platform.</li>
      <li>Chargebacks initiated through your bank without prior Platform notification may lead to account suspension for misuse.</li>
    </ul>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">5. Force Majeure Cancellations</h2>
    <p>In the event a Booking is disrupted, postponed, or canceled due to a Force Majeure Event-as defined in the Terms (Section 16), including acts of God (e.g., natural disasters, floods), government actions (e.g., lockdowns, curfews), pandemics, wars, or other uncontrollable circumstances-we will act promptly to protect Users.</p>
    
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">5.1 Available Remedies</h3>
    <p>Affected Buyers will receive, at our discretion and in coordination with the Service Provider, one or more of the following:</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>100% Refund of the Booking amount; or</li>
      <li>Free Rescheduling to the next available equivalent slot (no change fees); or</li>
      <li>Platform Credit equivalent to the Booking value, redeemable within 6 months for any future service.</li>
    </ul>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">5.2 Notification and Process</h3>
    <ul className="list-disc ml-6 space-y-2">
      <li>We will notify all affected parties via email, SMS, and in-app alerts as soon as the Force Majeure Event is confirmed.</li>
      <li>No penalties or additional charges apply, and Service Providers waive any cancellation fees.</li>
      <li>Users are not entitled to further compensation for incidental expenses (e.g., travel or accommodation) unless expressly required by applicable laws such as the CPA.</li>
    </ul>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">6. Dispute Resolution</h2>
    <p>We strive for swift, amicable resolutions to maintain positive relationships.</p>
    
    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">6.1 Initial Resolution</h3>
    <ul className="list-disc ml-6 space-y-2">
      <li>Raise disputes via the Platform's support ticket system (accessible from the "Help" section), providing full details and evidence (e.g., Booking ID, timestamps, proofs).</li>
      <li>Our team aims to acknowledge within 24 hours and resolve within 7 business days.</li>
    </ul>

    <h3 className="font-headline font-bold text-xl text-foreground mt-4 mb-2">6.2 Escalation</h3>
    <ul className="list-disc ml-6 space-y-2">
      <li>For unresolved matters, escalate to our Grievance Officer at support@equibudx.com. Responses are guaranteed within 48 hours, as per CPA (E-Commerce) Rules.</li>
      <li>Further disputes shall be resolved through binding arbitration under the Terms (Section 18) or via consumer forums under the CPA.</li>
    </ul>
    <p>Buyers retain all statutory rights, including approaching the District/State/National Consumer Disputes Redressal Commissions for claims up to INR 2 crore.</p>

    <h2 className="font-headline font-bold text-2xl text-foreground mt-8 mb-4">7. Contact Information</h2>
    <p>We are here to help reach out anytime during business hours.</p>
    <ul className="list-disc ml-6 space-y-2">
      <li>Customer Support: support@equibudx.com | Ramesh Botta 9689840943 CEO (Monday-Saturday, 9:00 AM-6:00 PM IST)</li>
      <li>Grievance Officer: support@equibudx.com | Response time: 48 hours</li>
      <li>Mailing Address: STARTWORKS TECHNOLOGIES PRIVATE LIMITED, PLOT NO. 19-20, Floor 2, HILL VIEW PARADISE, MADHURAWADA, Madhurawada, Visakhapatnam, Andhra Pradesh, 530048, India</li>
    </ul>
    <p>Note: This Policy is crafted to deliver equitable outcomes, safeguarding Buyer interests while supporting Service Provider sustainability. It is subject to periodic review for compliance and User feedback. For personalized legal guidance, please consult a qualified attorney. By engaging with the Platform, you affirm your understanding and acceptance of these terms.</p>
  </>
);

const RefundAndCancellationPolicy = () => {
  return (
    <LegalPage 
      title="Refund and Cancellation Policy" 
      content={content} 
      lastUpdated="December 03, 2025" 
    />
  );
};

export default RefundAndCancellationPolicy;