import { useContext } from 'react'
import { AppContext } from '../App';
import Card from './Card';

const About = () => {
    const { data } = useContext(AppContext);
    return <Card title='📜 About'><p>{data.about}</p></Card>
}

export default About