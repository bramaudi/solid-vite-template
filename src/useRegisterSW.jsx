import { createSignal } from "solid-js"
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW()

export default function useRegisterSW() {
  const needRefresh = createSignal(false)
  const offlineReady = createSignal(false)

	/**
	 * @param {boolean} [reloadPage] 
	 */
  const updateServiceWorker = (reloadPage) => reloadPage && updateSW()

  return {
    needRefresh,
    offlineReady,
    updateServiceWorker,
  }
}