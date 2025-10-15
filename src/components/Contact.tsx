import { useContext } from 'react';
import { AppContext } from '@/App';
import Card from '@/components/Card';


const Contact = () => {

    const { data } = useContext(AppContext);

    const phone_numbers = data.phone_numbers || [];
    const emails = data.emails || [];

    return <>
        {(phone_numbers.length > 0 || emails.length > 0) &&
            <Card title='📱 Contacts'>
                <div className='flex flex-col gap-0 px-1'>
                    {phone_numbers.map((number, index) => <ContactItem key={index} icon='pi pi-phone' text={number} />)}
                    {emails.map((email, index) => <ContactItem key={index} icon='pi pi-envelope' text={email} />)}
                </div>
            </Card>
        }
    </>
}

export default Contact;


const ContactItem = ({ icon, text }: { icon: string, text: string }) => {
    return <>
        <span className='flex flex-row items-center gap-2'>
            <i className={icon}></i>
            <span>{text}</span>
        </span>
    </>
}