exports.getTemplate = function() {
	return {
		"name": "HTML",
		"description": "HTML Template",
		"sources": [{
			"location": "/template-html/index.html.template", 
			"action": "generate",
			"rename": "{{fileName}}.html",
			"start" : "[[",
			"end" : "]]"
		}],
		"parameters": []
	};
};
