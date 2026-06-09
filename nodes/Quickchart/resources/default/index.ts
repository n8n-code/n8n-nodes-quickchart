import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET Chart",
					"value": "GET Chart",
					"action": "Generate a chart (GET)",
					"description": "Generate a chart based on the provided parameters.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chart"
						}
					}
				},
				{
					"name": "POST Chart",
					"value": "POST Chart",
					"action": "Generate a chart (POST)",
					"description": "Generate a chart based on the provided configuration in the request body.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chart"
						}
					}
				},
				{
					"name": "GET Qr",
					"value": "GET Qr",
					"action": "Generate a QR code (GET)",
					"description": "Generate a QR code based on the provided parameters.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/qr"
						}
					}
				},
				{
					"name": "POST Qr",
					"value": "POST Qr",
					"action": "Generate a QR code (POST)",
					"description": "Generate a QR code based on the provided configuration in the request body.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/qr"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /chart",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Chart"
					]
				}
			}
		},
		{
			"displayName": "Chart",
			"name": "chart",
			"description": "The chart configuration in Chart.js format (JSON or Javascript).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "chart",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Chart"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"description": "The width of the chart in pixels.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "width",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Chart"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"description": "The height of the chart in pixels.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "height",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Chart"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"description": "The output format of the chart, e.g., 'png', 'jpg', 'svg', or 'webp'.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Chart"
					]
				}
			}
		},
		{
			"displayName": "Background Color",
			"name": "backgroundColor",
			"description": "The background color of the chart.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "backgroundColor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Chart"
					]
				}
			}
		},
		{
			"displayName": "POST /chart",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Chart"
					]
				}
			}
		},
		{
			"displayName": "Background Color",
			"name": "backgroundColor",
			"type": "string",
			"default": "",
			"description": "The background color of the chart.",
			"routing": {
				"send": {
					"property": "backgroundColor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Chart"
					]
				}
			}
		},
		{
			"displayName": "Chart",
			"name": "chart",
			"type": "json",
			"default": "{}",
			"description": "The chart configuration in JSON format.",
			"routing": {
				"send": {
					"property": "chart",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Chart"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"type": "string",
			"default": "",
			"description": "The output format of the chart, e.g., 'png', 'jpg', 'svg', or 'webp'.",
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Chart"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"type": "number",
			"default": 0,
			"description": "The height of the chart in pixels.",
			"routing": {
				"send": {
					"property": "height",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Chart"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"type": "number",
			"default": 0,
			"description": "The width of the chart in pixels.",
			"routing": {
				"send": {
					"property": "width",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Chart"
					]
				}
			}
		},
		{
			"displayName": "GET /qr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Qr"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"description": "The text to be encoded in the QR code.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "text",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Qr"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"description": "The width of the QR code in pixels.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "width",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Qr"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"description": "The height of the QR code in pixels.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "height",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Qr"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"description": "The output format of the QR code, e.g., 'png' or 'svg'.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Qr"
					]
				}
			}
		},
		{
			"displayName": "Margin",
			"name": "margin",
			"description": "The margin around the QR code in pixels.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "margin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Qr"
					]
				}
			}
		},
		{
			"displayName": "POST /qr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Qr"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"type": "string",
			"default": "",
			"description": "The output format of the QR code, e.g., 'png' or 'svg'.",
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Qr"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"type": "number",
			"default": 0,
			"description": "The height of the QR code in pixels.",
			"routing": {
				"send": {
					"property": "height",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Qr"
					]
				}
			}
		},
		{
			"displayName": "Margin",
			"name": "margin",
			"type": "number",
			"default": 0,
			"description": "The margin around the QR code in pixels.",
			"routing": {
				"send": {
					"property": "margin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Qr"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "string",
			"default": "",
			"description": "The text to be encoded in the QR code.",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Qr"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"type": "number",
			"default": 0,
			"description": "The width of the QR code in pixels.",
			"routing": {
				"send": {
					"property": "width",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Qr"
					]
				}
			}
		},
];
