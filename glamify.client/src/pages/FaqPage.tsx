import * as React from 'react';
import { Accordion } from 'react-bootstrap';

export const FaqPage: React.FC = () => {
    return (
        <div style={{ padding: '20px', minHeight: '800px' }}>
            <h1 className='mt-5 mb-4'>Frequently Asked Questions</h1>
            <Accordion>
                <Accordion.Item eventKey="0" className='mb-3'>
                    <Accordion.Header>How do I book an appointment?</Accordion.Header>
                    <Accordion.Body>
                        You can book an appointment through our app by selecting the service you require,
                        choosing a convenient date and time, and confirming your details. If you need
                        assistance, feel free to contact our support team.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='mb-3'>
                    <Accordion.Header>What services do you offer?</Accordion.Header>
                    <Accordion.Body>
                        We offer a wide range of services including hair salons, nail care, and massage
                        therapy. Each category has various specific options that you can view and book
                        through our app.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='mb-3'>
                    <Accordion.Header>What is your cancellation policy?</Accordion.Header>
                    <Accordion.Body>
                        Appointments can be canceled or rescheduled at least 24 hours in advance without any
                        charge. Cancellations made less than 24 hours before the appointment time may incur
                        a fee.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='mb-3'>
                    <Accordion.Header>How can I change my appointment details?</Accordion.Header>
                    <Accordion.Body>
                        You can change your appointment details through our app by accessing your upcoming
                        appointments section, selecting the appointment you wish to change, and making the
                        necessary adjustments.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='mb-3'>
                    <Accordion.Header>Do you offer any discounts or promotions?</Accordion.Header>
                    <Accordion.Body>
                        Yes, we periodically offer discounts and promotions on various services. Keep an eye
                        on our app notifications and your email for exclusive deals and offers.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}