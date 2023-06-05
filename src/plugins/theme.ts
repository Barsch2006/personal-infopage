export default {
	defaultTheme: 'heeeckerTheme',
	themes: {
		/*
		Default theme (for all pages)
		*/
		heeeckerTheme: {
			dark: true,
			colors: {
				background: '#222222', // 222222
				surface: '#1e1e1e', //1e1e1e
				primary: '#ffffff', // ffffff
				secondary: '#10c906', // 10c906
				error: '#e82b05', // e82b05
				info: '#eb0c8b', // eb0c8b
				success: '#0dbc79', // 0dbc79
				warning: '#c5e510', // c5e510
			}
		},
		// write a light theme here
		heeeckerLightTheme: {
			dark: false,
			colors: {
				background: '#ffffff',
				surface: '#f5f5f5',
				primary: '#000000',
				secondary: '#10c906',
				error: '#e82b05',
				info: '#eb0c8b',
				success: '#0dbc79',
				warning: '#c5e510',
			}
		}
	}
};
