
interface CardProps {
    title?: string;
    children?: React.ReactNode
}

const Card = ({ title, children }: CardProps) => {
    return <>
        <div className="card bg-base-100 shadow-lg w-full">
            <div className="card-body p-3">
                {title && <h2 className="card-title text-primary text-xl">{title}</h2>}
                {children}
            </div>
        </div>
    </>
}

export default Card