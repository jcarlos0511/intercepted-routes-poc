import Link from 'next/link'

export default async function ProductInterceptedPage({
  params: { id },
}: {
  params: { id: string }
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Link className="text-lg text-gray-900" href="/products">
          ← Go back
        </Link>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Product details
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          Products/{id}
        </div>
      </div>
    </div>
  )
}
