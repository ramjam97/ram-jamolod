import type { EducationItemProps } from "@/types/cv";
import TimelineRibbon from "@/components/TimelineRibbon";

interface EducItemProps {
    index: number;
    total: number;
    item: EducationItemProps;
}

const EducationItem = ({ index, total, item }: EducItemProps) => {

    const date = `${item.start_date} - ${item.end_date}`;

    return <>
        <div className={`border-secondary border-s pt-7 pb-3 ps-2 relative`}>

            <TimelineRibbon content={date} type="secondary" />

            <div className="p-2">
                <div className="font-bold">{item.degree}</div>
                <div className="font-semibold">{item.institution}</div>
                <div className="text-sm text-base-content/70">{item.address}</div>
            </div>

            {index === total - 1 && <span className="absolute bottom-0 left-0 lh-0 w-2 h-2 bg-secondary transform translate-x-[-50%] rounded-full"></span>}

        </div>
    </>
}

export default EducationItem