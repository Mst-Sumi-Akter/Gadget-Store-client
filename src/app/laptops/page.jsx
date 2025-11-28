import LaptopCard from "@/components/LaptopCard";

async function getLaptops() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch laptops");
    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function LaptopsPage() {
  const laptops = await getLaptops();

  return (
    <section className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">All Laptops</h1>

      {laptops.length === 0 ? (
        <p className="text-center text-red-500">No laptops available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {laptops.map((item) => (
            <LaptopCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
