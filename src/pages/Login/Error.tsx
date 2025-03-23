
function Error() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8 text-center">
    <div className="mb-8">
      <h2 className="mt-6 text-6xl font-extrabold text-gray-900 dark:text-gray-100">404</h2>
      <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">We're Sorry! 🚧</p>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
      The token claiming process has already begun, but due to a system breach, we’ve temporarily taken the platform offline to ensure security and stability. Our team is actively working to resolve the issue, and we expect everything to be back up and running within the next 6 hours.
      </p>
    </div>
  </div>
  <div className="w-full max-w-2xl">
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300 dark:border-gray-600" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-2 bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400">
        We appreciate your patience and understanding. Claiming will resume as soon as the system is fully restored—stay tuned! 🚀
        </span>
      </div>
    </div>
  </div>
</div>

  )
}

export default Error