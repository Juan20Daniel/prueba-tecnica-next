interface Props {
    title: string;
    message: string;
    children?: React.ReactNode;
}

export const NotData = ({title, message, children}:Props) => (
    <div className="w-full h-full max-h-[400px] min-h-[270px] flex flex-col gap-3 justify-center items-center">
        <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
        <p className="text-sm md:text-2xl text-center px-4">{message}</p>
        {children}
    </div>
)
