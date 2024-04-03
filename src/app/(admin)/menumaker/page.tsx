// Paper size A3 (297mm x 420mm)

const MenuMaker = () => {
	return (
		<div className='m-2 h-screen'>
			<form className='bg-gray-500 w-full h-full grid grid-cols-4'>
				<div>
					<h3 className='text-center'>Appetizer</h3>
					<div className='flex justify-evenly'>
						<input
							type='text'
							value='1.     Egg Roll (1).....................................................'
						/>
						<input type='text' value='1.75' className='w-12' />
					</div>
				</div>
				<div>b</div>
				<div>c</div>
				<div>d</div>
			</form>
		</div>
	);
};

export default MenuMaker;
