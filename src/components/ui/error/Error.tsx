interface Props {
    title: string;
    message: string;
    solutionMessage: string;
}
export const Error = ({title, message, solutionMessage}:Props) => (
    <div className="flex flex-col justify-center items-center h-[200px] gap-3 px-4">
        <p className="font-bold text-4xl select-none">{title}</p>
        <p className="text-center text-[18px] md:text-2xl select-none">{message}</p>
        <p className="text-sm select-none">{solutionMessage}</p>
    </div>
);
