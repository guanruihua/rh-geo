const fs = require('fs')

function action(url) {
	const dirs = fs.readdirSync(url)

	dirs.forEach(unit => {
		if (unit.indexOf('.json') == -1) return

		const fileUrl = `${url}/${unit}`
		const jsonContent = fs.readFileSync(fileUrl)
		fs.writeFileSync(fileUrl, jsonContent.toString().replace(/\r|\n/gi, ''))
	})
}

action('./json')
action('./json/China/Province')
action('./json/China/City')