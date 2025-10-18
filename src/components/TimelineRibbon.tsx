interface TimelineRibbonProps {
    content: string;
    type: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'accent' | 'neutral';
}

const TimelineRibbon = ({ content, type }: TimelineRibbonProps) => {
    return <>
        <span className={`px-2 pe-4 absolute top-0 left-0 bg-${type} text-${type}-content`}>
            <span>{content}</span>
            <span className={`absolute top-[50%] left-0 w-2 h-2 bg-${type} border border-${type} transform translate-y-[-50%] translate-x-[-50%] rotate-45`}></span>
            <span className="absolute top-[50%] right-0 w-4 h-4 bg-base-100 transform translate-y-[-40%] translate-x-[50%] rotate-45"></span>
        </span>
    </>
}

export default TimelineRibbon