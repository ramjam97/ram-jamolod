interface TimelineRibbonProps {
    content: string;
    type: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'accent' | 'neutral';
}

const TimelineRibbon = ({ content, type }: TimelineRibbonProps) => {

    const parentClass = `px-2 pe-4 absolute top-0 left-0 bg-${type}`;
    const labelClass = `text-${type}-content`;
    const childClass = `bg-${type} border border-${type} absolute top-[50%] left-0 transform translate-y-[-50%] translate-x-[-50%] rotate-45 w-2 h-2`;

    return <>
        <span className={parentClass}>
            <span className={labelClass}>{content}</span>
            <span className={childClass}></span>
            <span className="absolute top-[50%] right-0 w-4 h-4 bg-base-100 transform translate-y-[-40%] translate-x-[50%] rotate-45"></span>
        </span>
    </>
}

export default TimelineRibbon