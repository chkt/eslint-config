import config from './index.js';
import tseslint from 'typescript-eslint';

export default tseslint.config([
	...config,
	{
		languageOptions : {
			parserOptions : {
				projectService : true,
				tsconfigRootDir : import.meta.dirname
			}
		}
	}
]);
