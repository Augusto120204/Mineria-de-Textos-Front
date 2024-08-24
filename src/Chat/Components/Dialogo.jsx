function BurbujaDialogo({ mensaje }) {
    return (
        <div className='ml-auto mr-2 p-3 rounded-lg md:max-w-xs bg-gray-700 shadow-md max-lg:w-3/4 mb-3'>
            <p className="text-white text-sm">{mensaje}</p>
        </div>
    );
}

function BurbujaRespuesta({ resumen, sentimientos }) {
    const anchoCompuesto = `${sentimientos.compound * 100}%`;
    const anchoPositivo = `${sentimientos.pos * 100}%`;
    const anchoNegativo = `${sentimientos.neg * 100}%`;
    const anchoNeutral = `${sentimientos.neu * 100}%`;

    return (
        <>
            <div className='ml-2 p-3 rounded-lg md:max-w-xs bg-gray-700 shadow-md mb-3 max-lg:w-3/4'>
                <p className="text-white text-sm font-bold">Resumen:</p>
                <p className="text-white text-sm">{resumen}</p>
            </div>
            <div className='ml-2 p-3 rounded-lg md:max-w-xs bg-gray-700 shadow-md max-lg:w-3/4'>
                <p className="text-white text-sm font-bold mb-2">Sentimientos:</p>
                <div className="flex flex-col space-y-2">
                    <p className="text-white text-sm">Compuesto: {sentimientos.compound}</p>
                    <div
                        className=" bg-blue-500 rounded-lg opacity-50 h-4"
                        style={{ width: anchoCompuesto }}
                    />
                    <p className="text-white text-sm">Negativo: {sentimientos.neg}</p>
                    <div
                        className=" bg-red-500 rounded-lg opacity-50 h-4"
                        style={{ width: anchoNegativo }}
                    />
                    <p className="text-white text-sm">Neutral: {sentimientos.neu}</p>
                    <div
                        className=" bg-gray-500 rounded-lg opacity-30 h-4"
                        style={{ width: anchoNeutral }}
                    />
                    <p className="text-white text-sm">Positivo: {sentimientos.pos}</p>
                    <div
                        className=" bg-green-500 rounded-lg h-4 opacity-50"
                        style={{ width: anchoPositivo }}
                    />
                </div>
            </div>
        </>
    );
}

export function Dialogo({
    item
}) {
    return (
        <div className="flex flex-col p-4 bg-gray-800 h-full">
            <h1 className="text-3xl font-semibold text-white mb-4 uppercase">Mineria de textos</h1>
            <div className="overflow-y-auto flex-1 h-0">
                <BurbujaDialogo mensaje={item.original} />
                <BurbujaRespuesta resumen={item.summary} sentimientos={item.sentiment} />
            </div>
        </div>
    );
}
