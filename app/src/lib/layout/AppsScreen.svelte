<script>
	const {navigateCallback} = $props()
</script>

<div class='flex flex-col py-8 px-6 overflow-hidden h-full w-full max-w-3xl mx-auto'>
	<div class='mb-8 text-center'>
		<h3 class='text-gray-700'>Frankie Read</h3>
	</div>

	<main>
		<div class='grid grid-cols-3 gap-4 md:w-2/3 lg:w-1/2 space-x-4 mx-auto'>
			<a
				href='/read'
				onclick={navigateCallback}
				class='flex flex-col items-center gap-2 hover:opacity-80 transition-opacity'
			>
				<span class='text-base text-gray-700'>Articles</span>
			</a>
			<a
				href='/read/queue'
				onclick={navigateCallback}
				class='flex flex-col items-center gap-2 hover:opacity-80 transition-opacity'
			>
				<span class='text-base text-gray-700'>Queue</span>
			</a>
			<a
				href='/read/collections'
				onclick={navigateCallback}
				class='flex flex-col items-center gap-2 hover:opacity-80 transition-opacity'
			>
				<span class='text-base text-gray-700'>Collections</span>
			</a>
		</div>
	</main>

	<div class='py-0 mt-6 bg-indigo-50'>
		<nav class='flex justify-center gap-6 mt-auto p-6 sticky bottom-0'>
			<a href='/read/settings' onclick={navigateCallback} class='text-sm text-gray-600 hover:text-gray-800'>
				Settings
			</a>
		</nav>
	</div>
</div>
