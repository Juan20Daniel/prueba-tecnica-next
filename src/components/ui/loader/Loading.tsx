export const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[200px] gap-3">
            <div className="w-12 h-12 border-4 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
            <span>Cargando...</span>
        </div>
    );
}
