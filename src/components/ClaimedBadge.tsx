
function ClaimedBadge() {
  return (
    <div className="w-full flex justify-center items-center mx-auto max-w-md p-4 bg-white shadow-2xl dark:bg-gray-900 sm:p-6 rounded-3xl">
    <div className="text-center">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full dark:bg-green-700">
        <svg className="h-10 w-10 text-green-600 dark:text-green-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      <h1 className="text-lg md:text-xl font-extrabold text-green-700 dark:text-green-400">Token Claimed!</h1>
</div>
</div>

  )
}

export default ClaimedBadge