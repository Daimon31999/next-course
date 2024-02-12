export default function TestPage() {
  return (
    <section className="">
      <form>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            type="email"
            className="peer block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
          />
          <p className="mt-2 hidden text-sm text-pink-600 peer-invalid:block">
            Please provide a valid email address.
          </p>
        </label>
      </form>
    </section>
  );
}
