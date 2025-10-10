import Card from './Card';
import type { LinkItem } from '../details/types';

interface LinksProps {
    links: LinkItem[]
}

const Links = ({ links }: LinksProps) => {

    return <>
        {links.length > 0 &&
            <Card title='🤝 Connect With Me'>
                <div className='flex flex-col gap-0 px-1'>
                    {links.map((link, index) => <ContactItem key={index} icon={link.icon} url={link.url} />)}
                </div>
            </Card>
        }
    </>
}

export default Links;


const ContactItem = ({ icon, url }: { icon: string, url: string }) => {
    return <>
        <span className='flex flex-row items-center gap-2'>
            <i className={icon}></i>
            <a href={url} target='_blank' className='link link-hover text-base-content underline'>{url}</a>
        </span>
    </>
}