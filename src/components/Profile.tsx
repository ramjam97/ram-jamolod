import { useContext, useEffect } from 'react'
import { AppContext } from '@/App'
import Card from '@/components/Card';
import DownloadButton from '@/components/DownloadButton';


const Profile = () => {

    const { data, showThemeController, setShowThemeController } = useContext(AppContext);

    useEffect(() => {
        document.title = `${data.name} | Portfolio`;
    }, []);

    return <>
        <Card>

            <span className='absolute top-2 right-2'>
                <button className='btn btn-soft btn-primary rounded-full btn-square btn-sm' onClick={() => setShowThemeController(true)} disabled={showThemeController}>
                    <i className='pi pi-palette'></i>
                </button>
            </span>

            <span className='p-3 flex items-center justify-center'>
                <div className='avatar'>
                    <div className='w-50'>
                        <img src={data.img} className='skeleton rounded-full text-transparent' alt={data.name} />
                    </div>
                </div>
            </span>

            <h2 className="card-title text-2xl">{data.name}</h2>

            <div className='flex flex-wrap gap-1 mb-1'>
                {data.roles.map((role, index) => <span className='badge badge-primary text-primary-content' key={index}>{role}</span>)}
            </div>

            <span className='text-sm text-base-content/70'>
                <i className='pi pi-map-marker'></i> {data.address}
            </span>

            <DownloadButton />

        </Card>
    </>
}

export default Profile