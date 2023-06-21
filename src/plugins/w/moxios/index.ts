import { App } from 'vue'
import { Moxios } from "./models/moxios";
import { Options } from './types/index'

export default {
	install: (app: App, options: Options | undefined) => {
		const moxios = new Moxios()

		if (!options || !options.routes || !Object.values(options.routes).length || options.disabled === true) return

		moxios.mock(options.routes as Record<string, unknown>)
	}
}
