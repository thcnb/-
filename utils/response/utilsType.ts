export type icon = 'none' | 'success' | 'error' | 'fail' | 'exception' | 'loading'
export type utilsTpye = {
	toast: (title: string, icon: icon, mask: boolean) => void
}
