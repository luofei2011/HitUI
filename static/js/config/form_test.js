if (typeof hit === 'undefined')
    hit = {};
if (typeof hit.CONFIG === 'undefined')
    hit.CONFIG = {};

hit.CONFIG.form_test = {
	formName: 'Test_Form',
	groups: [
		{
			groupName: 'Login Infomation',
			showFrame: true,
			items: [
				{
					name: '110',
					label: 'Name',
					type: 'text',
					required: true,
					sizeLevel: 2,
					defaultValue: 'input ur name here',
				},{
					name: '123',
					label: 'Password',
					type: 'password',
					required: true,
					sizeLevel: 2,
					defaultValue: 'input ur password here',
				},{
					name: '111',
					label: 'Nation',
					type: 'checkbox',
					required: false,
					sizeLevel: 2,
					defaultValue: [1,2],
					selections: [
						'China',
						'Amarica',
						'Japan',
						'Korea',
						'Brazil',
					],
				},{
					name: '10',
					label: 'location',
					type: 'list',
					required: false,
					sizeLevel: 2,
					defaultValue: 0,
					selections: [
						'China',
						'Amarica',
						'Japan',
						'Korea',
						'Brazil',
					],
				},
			],
		},{
			groupName: 'stupid Group',
			showFrame: true,
			items: [
				{
					name: '99',
					label: 'Name',
					type: 'text',
					required: true,
					sizeLevel: 2,
					defaultValue: 'input ur name here',
				},{
					name: '999',
					label: 'Name',
					type: 'text',
					required: true,
					sizeLevel: 2,
					defaultValue: 'input ur name here',
				},
			],
		},
	],
};
