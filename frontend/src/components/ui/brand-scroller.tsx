"use client";

export const BrandScroller = () => {
    const brands = [
        "ACME Corp",
        "Nebula",
        "Tesseract",
        "Vertex",
        "Orbital",
        "Quantum"
    ];

    return (
        <div className="group flex overflow-hidden py-4 [--gap:6rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
            {Array(6)
                .fill(0)
                .map((_, i) => (
                    <div
                        className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
                        key={i}
                    >
                        {brands.map((brand) => (
                            <div key={brand} className="flex items-center">
                                <p className="text-2xl font-bold tracking-tight opacity-30 hover:opacity-100 transition-opacity cursor-default [font-family:serif] text-white italic">
                                    {brand}
                                </p>
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );
};
