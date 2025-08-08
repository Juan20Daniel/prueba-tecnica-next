interface Props {
    value: string;
}

export const Title = ({value}:Props) => (
    <h1 className='text-2xl text-black font-bold sm:text-4xl'>{value}</h1>        
);
