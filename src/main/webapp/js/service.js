var data = {
		  "serviceproviders": {
			    "-format": "2.0",
			    "country": [
			      {
			        "-code": "ae",
			        "provider": [
			          {
			            "name": "Etisalat",
			            "gsm": {
			              "network-id": {
			                "-mcc": "424",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "mnet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Etisalat",
			                  "username": "mnet",
			                  "password": "mnet",
			                  "dns": [
			                    "194.170.1.6",
			                    "194.170.1.7"
			                  ]
			                },
			                {
			                  "-value": "etisalat.ae",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Etisalat 3G",
			                  "username": "etisalat.ae",
			                  "password": "etisalat.ae"
			                }
			              ]
			            }
			          },
			          {
			            "name": "du",
			            "gsm": {
			              "network-id": {
			                "-mcc": "424",
			                "-mnc": "03"
			              },
			              "msisdn-query": { "ussd": "*#100#" },
			              "apn": {
			                "-value": "du",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "af",
			        "provider": {
			          "name": "AWCC",
			          "gsm": {
			            "network-id": {
			              "-mcc": "412",
			              "-mnc": "01"
			            },
			            "apn": {
			              "-value": "internet",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" },
			              "username": "awcc",
			              "password": "1111"
			            }
			          }
			        }
			      },
			      {
			        "-code": "al",
			        "provider": {
			          "name": "Vodafone",
			          "gsm": {
			            "network-id": {
			              "-mcc": "276",
			              "-mnc": "02"
			            },
			            "apn": [
			              {
			                "-value": "Twa",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "TWA"
			              },
			              {
			                "-value": "vodafoneweb",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Vodafone Web"
			              }
			            ]
			          }
			        }
			      },
			      {
			        "-code": "am",
			        "provider": [
			          {
			            "name": "Beeline",
			            "gsm": {
			              "network-id": {
			                "-mcc": "283",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet.beeline.am",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "internet",
			                "password": "internet"
			              }
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "283",
			                "-mnc": "10"
			              },
			              "apn": [
			                {
			                  "-value": "internet.orange",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet Hima (USB)"
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Broadband"
			                }
			              ]
			            }
			          },
			          {
			            "name": "VivaCell/MTS",
			            "gsm": {
			              "network-id": {
			                "-mcc": "283",
			                "-mnc": "05"
			              },
			              "apn": [
			                {
			                  "-value": "connect.vivacell.am",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "MTS connect"
			                },
			                {
			                  "-value": "inet.vivacell.am",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Broadband"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Karabakh Telecom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "283",
			                "-mnc": "04"
			              },
			              "balance-check": { "ussd": "*122#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*123*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "connect.kt.am",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "KT_MARK"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ao",
			        "provider": [
			          {
			            "name": "Movinet",
			            "cdma": { "username": "uname" }
			          },
			          {
			            "name": "Unitel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "631",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "internet.unitel.co.ao",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ar",
			        "provider": [
			          {
			            "name": "Personal",
			            "gsm": {
			              "network-id": {
			                "-mcc": "722",
			                "-mnc": "341"
			              },
			              "apn": {
			                "-value": "gprs.personal.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "gprs",
			                "password": "adgj",
			                "dns": [
			                  "172.25.7.6",
			                  "172.25.7.7"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Arnet",
			            "gsm": {
			              "network-id": {
			                "-mcc": "722",
			                "-mnc": "340"
			              },
			              "apn": {
			                "-value": "arnet.personal.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "172.25.7.6",
			                  "172.25.7.7"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Claro",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "722",
			                  "-mnc": "310"
			                },
			                {
			                  "-mcc": "722",
			                  "-mnc": "320"
			                },
			                {
			                  "-mcc": "722",
			                  "-mnc": "330"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "gprs.claro.com.ar",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "3G Internet",
			                  "username": "clarogprs",
			                  "password": "clarogprs999",
			                  "dns": [
			                    "170.51.255.100",
			                    "170.51.242.18"
			                  ]
			                },
			                {
			                  "-value": "internet.ctimovil.com.ar",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS",
			                  "username": "clarogprs",
			                  "password": "clarogprs999"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Movistar",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "722",
			                  "-mnc": "010"
			                },
			                {
			                  "-mcc": "722",
			                  "-mnc": "070"
			                }
			              ],
			              "apn": {
			                "-value": "internet.gprs.unifon.com.ar",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "wap",
			                "password": "wap"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "at",
			        "provider": [
			          {
			            "name": "A1/Telekom Austria",
			            "gsm": {
			              "network-id": {
			                "-mcc": "232",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "a1.net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "A1 Breitband",
			                  "username": "ppp@a1plus.at",
			                  "password": "ppp",
			                  "dns": [
			                    "194.48.124.202",
			                    "194.48.124.200"
			                  ]
			                },
			                {
			                  "-value": "aon.data",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "aon (Flex, Breitband-Duo, BusinessFlex)",
			                  "username": "mobile@aon.at",
			                  "password": "ppp"
			                },
			                {
			                  "-value": "aon.at",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "aonMobile",
			                  "username": "mobile@aon.at",
			                  "password": "ppp"
			                }
			              ]
			            }
			          },
			          {
			            "name": "ABroadband",
			            "gsm": {
			              "network-id": {
			                "-mcc": "232",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "mdata.com",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "name": "International Roaming",
			                "username": "mdata@mdata.com",
			                "password": "ppp"
			              }
			            }
			          },
			          {
			            "name": "Bob",
			            "gsm": {
			              "network-id": {
			                "-mcc": "232",
			                "-mnc": "11"
			              },
			              "apn": [
			                {
			                  "-value": "bob.at",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "data@bob.at",
			                  "password": "ppp"
			                },
			                {
			                  "-value": "bob.at",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "ppp@bob.at",
			                  "password": "ppp",
			                  "dns": [
			                    "194.48.139.254",
			                    "194.48.124.200"
			                  ]
			                },
			                {
			                  "-value": "mms.bob.at",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "data@bob.at",
			                  "password": "ppp"
			                }
			              ]
			            }
			          },
			          {
			            "name": "T-Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "232",
			                "-mnc": "03"
			              },
			              "apn": [
			                {
			                  "-value": "gprswap",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "WAP",
			                  "username": "t-mobile",
			                  "password": "tm"
			                },
			                {
			                  "-value": "gprsinternet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet",
			                  "username": "t-mobile",
			                  "password": "tm",
			                  "dns": [
			                    "213.162.69.169",
			                    "213.162.65.1"
			                  ]
			                },
			                {
			                  "-value": "business.gprsinternet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Business Internet",
			                  "username": "t-mobile",
			                  "password": "tm"
			                }
			              ]
			            }
			          },
			          {
			            "name": "tele.ring",
			            "gsm": {
			              "network-id": {
			                "-mcc": "232",
			                "-mnc": "07"
			              },
			              "balance-check": { "ussd": "*102#" },
			              "apn": {
			                "-value": "web",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Ge org:)",
			                "username": "web@telering.at",
			                "password": "web",
			                "dns": [
			                  "213.162.69.170",
			                  "213.162.65.2"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "232",
			                "-mnc": "05"
			              },
			              "apn": [
			                {
			                  "-value": "web.one.at",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "OneNet Web",
			                  "username": "web",
			                  "password": "web",
			                  "dns": [
			                    "194.24.128.100",
			                    "194.24.128.102"
			                  ]
			                },
			                {
			                  "-value": "wap.one.at",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "Orange WAP",
			                  "username": "wap",
			                  "password": "wap"
			                },
			                {
			                  "-value": "mms.one.at",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "mms" },
			                  "name": "Orange MMS",
			                  "username": "mms",
			                  "password": "mms"
			                },
			                {
			                  "-value": "fullspeed",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Web (no filtering)",
			                  "username": "web",
			                  "password": "web"
			                },
			                {
			                  "-value": "orange.web",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Orange Web",
			                  "username": "Orange",
			                  "password": "Orange",
			                  "dns": [
			                    "81.3.216.100",
			                    "194.24.128.100"
			                  ]
			                },
			                {
			                  "-value": "orange.mms",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "mms" },
			                  "name": "Orange Web",
			                  "username": "mms",
			                  "password": "mms"
			                }
			              ]
			            }
			          },
			          {
			            "name": [
			              "Drei (3)",
			              {
			                "-xml:lang": "de",
			                "#text": "Drei"
			              }
			            ],
			            "gsm": {
			              "network-id": {
			                "-mcc": "232",
			                "-mnc": "10"
			              },
			              "apn": {
			                "-value": "drei.at",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "213.94.78.17",
			                  "213.94.78.16"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Yesss",
			            "gsm": {
			              "network-id": {
			                "-mcc": "232",
			                "-mnc": "12"
			              },
			              "apn": {
			                "-value": "web.yesss.at",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "VOLmobil",
			            "gsm": {
			              "network-id": {
			                "-mcc": "232",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "volmobil",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "au",
			        "provider": [
			          {
			            "name": "Amaysim",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": { "-value": "internet" }
			            }
			          },
			          {
			            "name": "Apex Telecom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": { "-value": "splns357" }
			            }
			          },
			          {
			            "name": "Beagle",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": { "-value": "splns357" }
			            }
			          },
			          {
			            "name": "BLiNK",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "splns888a1",
			                  "name": "BLiNK (services after 04/08/09)"
			                },
			                {
			                  "-value": "connect",
			                  "name": "BLiNK (services prior to 04/08/09)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Crazy John's",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "505",
			                  "-mnc": "03"
			                },
			                {
			                  "-mcc": "505",
			                  "-mnc": "38"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "purtona.net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Crazy NET",
			                  "dns": [
			                    "203.21.112.40",
			                    "203.21.113.40"
			                  ]
			                },
			                {
			                  "-value": "purtona.wap",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "Crazy WAP/MMS"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Dodo",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "WirelessBroadband",
			                  "name": "Postpaid"
			                },
			                {
			                  "-value": "DODOLNS1",
			                  "name": "Prepaid"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Escape Net",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": { "-value": "splns357" }
			            }
			          },
			          {
			            "name": "Exetel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "exetel1",
			                  "name": "Exetel (Optus Based HSPA plans)"
			                },
			                {
			                  "-value": "INTERNET",
			                  "name": "Exetel (Optus Based CAP Plans) not iPhone"
			                },
			                {
			                  "-value": "OPTUSWAP",
			                  "name": "Exetel (Optus Based CAP Plans) not iPhone"
			                },
			                {
			                  "-value": "YesINTERNET",
			                  "name": "Exetel (Optus Based CAP Plans) iPhone"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Exetel (Vodafone based)",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "vfinternet.au",
			                "name": "Exetel (Vodafone Based)"
			              }
			            }
			          },
			          {
			            "name": "Highway1",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": { "-value": "splns357" }
			            }
			          },
			          {
			            "name": "iiNet",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "iinet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Internode",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "internode",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "NodeMobile Data"
			                },
			                {
			                  "-value": "splns333a1",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Old NodeMobile Data (before 2009-08-26)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "iPrimus",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": { "-value": "primuslns1" }
			            }
			          },
			          {
			            "name": "Optus",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Internet (handsets)",
			                  "dns": [
			                    "211.29.132.12",
			                    "198.142.0.51"
			                  ]
			                },
			                {
			                  "-value": "yesinternet",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Optus Yes Internet",
			                  "dns": [
			                    "211.29.132.12",
			                    "198.142.0.51"
			                  ]
			                },
			                {
			                  "-value": "connect",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Wireless Broadband",
			                  "dns": [
			                    "211.29.132.12",
			                    "198.142.0.51"
			                  ]
			                },
			                {
			                  "-value": "connectcap",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Post-Paid Mobile Broadband",
			                  "dns": [
			                    "211.29.132.12",
			                    "198.142.0.51"
			                  ]
			                },
			                {
			                  "-value": "preconnect",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Pre-Paid Mobile Broadband",
			                  "dns": [
			                    "211.29.132.12",
			                    "198.142.0.51"
			                  ]
			                },
			                {
			                  "-value": "mms",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "mms" },
			                  "name": "Optus MMS"
			                }
			              ]
			            }
			          },
			          {
			            "name": "TPG Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "yesinternet",
			                  "name": "TPG (iPhone)"
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "TPG (all except iPhone)"
			                },
			                {
			                  "-value": "mms",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "mms" },
			                  "name": "MMS"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Pennytel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "03"
			              },
			              "apn": [
			                {
			                  "-value": "live.vodafone.com",
			                  "name": "Pennytel (Vodafone) live.vodafone.com"
			                },
			                {
			                  "-value": "vfinternet.au",
			                  "name": "Pennytel (Vodafone) vfinternet.au"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Smelly Black Dog",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": { "-value": "splns357" }
			            }
			          },
			          {
			            "name": "Telstra",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "01"
			              },
			              "balance-check": {
			                "dtmf": [
			                  "125111",
			                  "1258888"
			                ],
			                "ussd-response": "*100#"
			              },
			              "apn": [
			                {
			                  "-value": "telstra.wap",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "dns": [
			                    "139.130.4.4",
			                    "203.50.2.71"
			                  ]
			                },
			                {
			                  "-value": "telstra.datapack",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Telstra (3G data pack)",
			                  "password": "Telstra",
			                  "dns": [
			                    "139.130.4.4",
			                    "203.50.2.71"
			                  ]
			                },
			                {
			                  "-value": "telstra.internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Telstra (Next G)",
			                  "dns": [
			                    "10.4.85.138",
			                    "10.4.176.234"
			                  ]
			                },
			                {
			                  "-value": "telstra.pcpack",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Telstra (3G PC pack - pay by time)",
			                  "password": "Telstra",
			                  "dns": [
			                    "139.130.4.4",
			                    "203.50.2.71"
			                  ]
			                },
			                {
			                  "-value": "telstra.iph",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "Telstra Internet/Wap"
			                },
			                {
			                  "-value": "telstra.mms",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "mms" },
			                  "name": "Telstra MMS"
			                },
			                {
			                  "-value": "telstra.bigpond",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Telstra BigPond"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Three",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "06"
			              },
			              "apn": [
			                {
			                  "-value": "3netaccess",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "a",
			                  "password": "a",
			                  "dns": [
			                    "202.124.68.130",
			                    "202.124.76.66"
			                  ]
			                },
			                {
			                  "-value": "3services",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Three Prepaid",
			                  "username": "a",
			                  "password": "a",
			                  "dns": [
			                    "202.124.68.130",
			                    "202.124.76.66"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Virgin Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "VirginInternet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Internet",
			                  "username": "guest",
			                  "password": "guest",
			                  "dns": "61.88.88.88"
			                },
			                {
			                  "-value": "VirginBroadband",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Broadband"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "03"
			              },
			              "apn": [
			                {
			                  "-value": "vfinternet.au",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Postpaid and some prepaid phone plans"
			                },
			                {
			                  "-value": "vfprepaymbb",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prepaid",
			                  "dns": [
			                    "203.21.112.40",
			                    "203.21.113.40"
			                  ]
			                },
			                {
			                  "-value": "live.vodafone.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Vodafone Internet"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Westnet",
			            "gsm": {
			              "network-id": {
			                "-mcc": "505",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "yesinternet",
			                  "name": "Westnet (iPhone)"
			                },
			                {
			                  "-value": "internet",
			                  "name": "Westnet (all except iPhone)"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "az",
			        "provider": [
			          {
			            "name": "Azercell",
			            "gsm": {
			              "network-id": {
			                "-mcc": "400",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Bakcell",
			            "gsm": {
			              "network-id": {
			                "-mcc": "400",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "mms",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Azerfon",
			            "gsm": {
			              "network-id": {
			                "-mcc": "400",
			                "-mnc": "04"
			              },
			              "msisdn-query": { "ussd": "*100#3#" },
			              "apn": {
			                "-value": "azerfon",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ba",
			        "provider": [
			          {
			            "name": "BH GSM",
			            "gsm": {
			              "network-id": {
			                "-mcc": "218",
			                "-mnc": "90"
			              },
			              "apn": {
			                "-value": "mms.bhmobile.ba",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "mms" }
			              }
			            }
			          },
			          {
			            "name": "m:tel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "218",
			                "-mnc": "05"
			              },
			              "balance-check": { "ussd": "*101#" },
			              "apn": [
			                {
			                  "-value": "mtelgprs1",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Package 1",
			                  "dns": [
			                    "81.93.67.2",
			                    "81.93.67.3"
			                  ]
			                },
			                {
			                  "-value": "mtelgprs2",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Package 2",
			                  "dns": [
			                    "81.93.67.2",
			                    "81.93.67.3"
			                  ]
			                },
			                {
			                  "-value": "mtelgprs3",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Package 3",
			                  "dns": [
			                    "81.93.67.2",
			                    "81.93.67.3"
			                  ]
			                },
			                {
			                  "-value": "mtelgprs4",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Package 4",
			                  "dns": [
			                    "81.93.67.2",
			                    "81.93.67.3"
			                  ]
			                },
			                {
			                  "-value": "mtelfun",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prepaid",
			                  "dns": [
			                    "81.93.67.2",
			                    "81.93.67.3"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "HT-ERONET",
			            "gsm": {
			              "network-id": {
			                "-mcc": "218",
			                "-mnc": "03"
			              },
			              "balance-check": { "ussd": "*101#" },
			              "apn": {
			                "-value": "gprs.eronet.ba",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "bb",
			        "provider": {
			          "name": "Digicel",
			          "gsm": {
			            "network-id": {
			              "-mcc": "342",
			              "-mnc": "750"
			            },
			            "apn": {
			              "-value": "isp.digicelbarbados.com",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" }
			            }
			          }
			        }
			      },
			      {
			        "-code": "bd",
			        "provider": [
			          {
			            "name": "Robi (AKTel)",
			            "gsm": {
			              "network-id": {
			                "-mcc": "470",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Internet",
			                "dns": "192.168.23.7"
			              }
			            }
			          },
			          {
			            "name": "Banglalink",
			            "gsm": {
			              "network-id": {
			                "-mcc": "470",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "blweb",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Web",
			                "dns": "10.10.55.34"
			              }
			            }
			          },
			          {
			            "name": "GrameenPhone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "470",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "gpinternet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "202.56.4.120",
			                  "202.56.4.121"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Warid",
			            "gsm": {
			              "network-id": {
			                "-mcc": "470",
			                "-mnc": "07"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Internet",
			                "dns": "10.6.0.2"
			              }
			            }
			          },
			          {
			            "name": "Citycell",
			            "cdma": {
			              "username": "waps",
			              "password": "waps",
			              "dns": [
			                "117.18.224.146",
			                "117.18.224.147"
			              ],
			              "sid": { "-value": "13480" }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "be",
			        "provider": [
			          {
			            "name": "Mobistar",
			            "gsm": {
			              "network-id": {
			                "-mcc": "206",
			                "-mnc": "10"
			              },
			              "voicemail": "5555",
			              "balance-check": { "ussd": "#123#" },
			              "apn": [
			                {
			                  "-value": "web.pro.be",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Business",
			                  "username": "mobistar",
			                  "password": "mobistar",
			                  "dns": [
			                    "212.65.63.10",
			                    "212.65.63.145"
			                  ]
			                },
			                {
			                  "-value": "internet.be",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Personal",
			                  "username": "mobistar",
			                  "password": "mobistar",
			                  "dns": [
			                    "212.65.63.10",
			                    "212.65.63.145"
			                  ]
			                },
			                {
			                  "-value": "iew.be",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet Everywhere",
			                  "username": "mobistar",
			                  "password": "mobistar",
			                  "dns": [
			                    "212.224.255.252",
			                    "212.65.63.217"
			                  ]
			                },
			                {
			                  "-value": "mworld.be",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "mobistar",
			                  "password": "mobistar",
			                  "dns": [
			                    "212.65.63.10",
			                    "212.65.63.145"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Telenet Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "206",
			                "-mnc": "10"
			              },
			              "apn": [
			                {
			                  "-value": "mobile.internet.be",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Old Walk & Surf"
			                },
			                {
			                  "-value": "telenetwap.be",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Walk & Talk"
			                },
			                {
			                  "-value": "telenetwap.be",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Walk & Surf"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "206",
			                "-mnc": "10"
			              },
			              "apn": {
			                "-value": "orangeinternet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Proximus",
			            "gsm": {
			              "network-id": {
			                "-mcc": "206",
			                "-mnc": "01"
			              },
			              "voicemail": "1230",
			              "apn": [
			                {
			                  "-value": "internet.proximus.be",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Inter",
			                  "dns": [
			                    "195.238.2.21",
			                    "81.169.60.107"
			                  ]
			                },
			                {
			                  "-value": "intraprox.be",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Intra",
			                  "dns": [
			                    "195.238.2.21",
			                    "195.238.2.22"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Base",
			            "gsm": {
			              "network-id": {
			                "-mcc": "206",
			                "-mnc": "20"
			              },
			              "voicemail": "1933",
			              "apn": {
			                "-value": "gprs.base.be",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "base",
			                "password": "base",
			                "dns": [
			                  "195.130.131.139",
			                  "212.53.4.4"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Mobile Vikings",
			            "gsm": {
			              "network-id": {
			                "-mcc": "206",
			                "-mnc": "20"
			              },
			              "voicemail": "1933",
			              "apn": {
			                "-value": "web.be",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "username": "web",
			                "password": "web"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "bf",
			        "provider": {
			          "name": "Airtel 3G",
			          "gsm": {
			            "network-id": {
			              "-mcc": "613",
			              "-mnc": "02"
			            },
			            "apn": {
			              "-value": "internet",
			              "plan": { "-type": "prepaid" },
			              "usage": { "-type": "internet" }
			            }
			          }
			        }
			      },
			      {
			        "-code": "bg",
			        "provider": [
			          {
			            "name": "GloBul",
			            "gsm": {
			              "network-id": {
			                "-mcc": "284",
			                "-mnc": "05"
			              },
			              "voicemail": "120",
			              "balance-check": { "ussd": "*125#" },
			              "apn": {
			                "-value": "internet.globul.bg",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "globul",
			                "dns": "192.168.88.11"
			              }
			            }
			          },
			          {
			            "name": "M-Tel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "284",
			                "-mnc": "01"
			              },
			              "voicemail": "131",
			              "balance-check": { "ussd": "*101#" },
			              "apn": {
			                "-value": "inet-gprs.mtel.bg",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "213.226.7.34",
			                  "213.226.7.35"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Vivacom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "284",
			                "-mnc": "03"
			              },
			              "voicemail": "110",
			              "balance-check": { "ussd": "*102#" },
			              "apn": [
			                {
			                  "-value": "internet.vivacom.bg",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Vivacom Internet (Postpaid)",
			                  "username": "vivacom",
			                  "password": "vivacom"
			                },
			                {
			                  "-value": "internet.vivatel.bg",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Vivatel (old)",
			                  "username": "vivatel",
			                  "password": "vivatel",
			                  "dns": "192.168.123.123"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "bh",
			        "provider": [
			          {
			            "name": "Batelco",
			            "gsm": {
			              "network-id": {
			                "-mcc": "426",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet.batelco.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "oNet",
			                "username": "wap",
			                "password": "wap"
			              }
			            }
			          },
			          {
			            "name": "Zain BH",
			            "gsm": {
			              "network-id": {
			                "-mcc": "426",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet",
			                  "username": "internet",
			                  "password": "internet"
			                },
			                {
			                  "-value": "hsdpa",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "eGO",
			                  "username": "hsdpa",
			                  "password": "hsdpa"
			                }
			              ]
			            }
			          },
			          {
			            "name": "STC",
			            "gsm": {
			              "network-id": {
			                "-mcc": "426",
			                "-mnc": "04"
			              },
			              "apn": {
			                "-value": "viva.bh",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Viva"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "br",
			        "provider": [
			          {
			            "name": "Brasil Telecom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "724",
			                "-mnc": "16"
			              },
			              "apn": {
			                "-value": "brt.br",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "BrT",
			                "password": "BrT"
			              }
			            }
			          },
			          {
			            "name": "Claro",
			            "gsm": {
			              "network-id": {
			                "-mcc": "724",
			                "-mnc": "05"
			              },
			              "voicemail": "*100",
			              "balance-check": {
			                "ussd": [
			                  "*544#",
			                  "*545#",
			                  "*546#"
			                ]
			              },
			              "apn": [
			                {
			                  "-value": "claro.com.br",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "claro",
			                  "password": "claro"
			                },
			                {
			                  "-value": "bandalarga.claro.com.br",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "3G",
			                  "username": "claro",
			                  "password": "claro"
			                }
			              ]
			            }
			          },
			          {
			            "name": "CTBC",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "724",
			                  "-mnc": "07"
			                },
			                {
			                  "-mcc": "724",
			                  "-mnc": "32"
			                },
			                {
			                  "-mcc": "724",
			                  "-mnc": "33"
			                },
			                {
			                  "-mcc": "724",
			                  "-mnc": "34"
			                }
			              ],
			              "balance-check": { "dtmf": "*22" },
			              "apn": {
			                "-value": "ctbc.br",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "ctbc",
			                "password": "1212"
			              }
			            }
			          },
			          {
			            "name": "Oi",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "724",
			                  "-mnc": "16"
			                },
			                {
			                  "-mcc": "724",
			                  "-mnc": "31"
			                },
			                {
			                  "-mcc": "724",
			                  "-mnc": "24"
			                }
			              ],
			              "voicemail": "*100",
			              "balance-check": {
			                "dtmf": [
			                  "*804",
			                  "*805"
			                ]
			              },
			              "apn": [
			                {
			                  "-value": "gprs.oi.com.br",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "password": "oioioi"
			                },
			                {
			                  "-value": "wapgprs.oi.com.br",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "WAP",
			                  "username": "oiwap",
			                  "password": "oioioi"
			                }
			              ]
			            }
			          },
			          {
			            "name": "TIM",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "724",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "724",
			                  "-mnc": "03"
			                },
			                {
			                  "-mcc": "724",
			                  "-mnc": "04"
			                },
			                {
			                  "-mcc": "724",
			                  "-mnc": "08"
			                }
			              ],
			              "voicemail": "*100",
			              "balance-check": {
			                "ussd": "*222#",
			                "dtmf": "*222"
			              },
			              "apn": {
			                "-value": "tim.br",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "tim",
			                "password": "tim",
			                "dns": [
			                  "10.223.246.102",
			                  "10.223.246.103"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Velox",
			            "gsm": {
			              "apn": {
			                "-value": "wap.telcel.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "iesgprs",
			                "password": "iesgprs2002",
			                "dns": "66.36.250.14"
			              }
			            }
			          },
			          {
			            "name": "Vivo",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "724",
			                  "-mnc": "06"
			                },
			                {
			                  "-mcc": "724",
			                  "-mnc": "10"
			                },
			                {
			                  "-mcc": "724",
			                  "-mnc": "11"
			                },
			                {
			                  "-mcc": "724",
			                  "-mnc": "23"
			                }
			              ],
			              "voicemail": "*555",
			              "balance-check": {
			                "dtmf": [
			                  "*8000",
			                  "*5005"
			                ]
			              },
			              "apn": {
			                "-value": "zap.vivo.com.br",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "vivo",
			                "password": "vivo"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "bs",
			        "provider": {
			          "name": "Batelco",
			          "gsm": {
			            "network-id": {
			              "-mcc": "364",
			              "-mnc": "390"
			            },
			            "apn": {
			              "-value": "internet.btcbahamas.com",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" }
			            }
			          }
			        }
			      },
			      {
			        "-code": "bn",
			        "provider": [
			          {
			            "name": "B-Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "528",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "bmobilewap",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "DSTCOM",
			            "gsm": {
			              "network-id": {
			                "-mcc": "528",
			                "-mnc": "11"
			              },
			              "apn": {
			                "-value": "dst.wap",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "wap",
			                "password": "wap"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "by",
			        "provider": [
			          {
			            "name": "velcom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "257",
			                "-mnc": "01"
			              },
			              "balance-check": { "ussd": "*100#" },
			              "apn": [
			                {
			                  "-value": "wap.velcom.by",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "GPRS WAP",
			                  "username": "wap",
			                  "password": "wap"
			                },
			                {
			                  "-value": "web.velcom.by",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS WEB",
			                  "username": "web",
			                  "password": "web"
			                },
			                {
			                  "-value": "plus.velcom.by",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS WEB PLUS",
			                  "username": "plus",
			                  "password": "plus"
			                },
			                {
			                  "-value": "privet.velcom.by",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS PRIVET",
			                  "username": "privet",
			                  "password": "privet"
			                },
			                {
			                  "-value": "web1.velcom.by",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "WEB BASIC",
			                  "username": "web1",
			                  "password": "web1"
			                },
			                {
			                  "-value": "web2.velcom.by",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "WEB 25",
			                  "username": "web2",
			                  "password": "web2"
			                },
			                {
			                  "-value": "web3.velcom.by",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "WEB 150",
			                  "username": "web3",
			                  "password": "web3"
			                },
			                {
			                  "-value": "vmi.velcom.by",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "WEB 500",
			                  "username": "vmi",
			                  "password": "vmi"
			                }
			              ]
			            }
			          },
			          {
			            "name": "MTS",
			            "gsm": {
			              "network-id": {
			                "-mcc": "257",
			                "-mnc": "02"
			              },
			              "balance-check": { "ussd": "*100#" },
			              "apn": {
			                "-value": "internet.mts.by",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "mts",
			                "password": "mts"
			              }
			            }
			          },
			          {
			            "name": "life:)",
			            "gsm": {
			              "network-id": {
			                "-mcc": "257",
			                "-mnc": "03"
			              },
			              "balance-check": { "ussd": "*100#" },
			              "apn": {
			                "-value": "internet.life.com.by",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "bw",
			        "provider": {
			          "name": "Mascom Wireless",
			          "gsm": {
			            "network-id": {
			              "-mcc": "652",
			              "-mnc": "01"
			            },
			            "apn": {
			              "-value": "internet.mascom",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" }
			            }
			          }
			        }
			      },
			      {
			        "-code": "bi",
			        "provider": [
			          {
			            "name": "Leo/UCom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "642",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "ucnet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Tempo/Africell",
			            "gsm": {
			              "network-id": {
			                "-mcc": "642",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ca",
			        "provider": [
			          {
			            "name": "Fido",
			            "gsm": {
			              "network-id": {
			                "-mcc": "302",
			                "-mnc": "370"
			              },
			              "apn": {
			                "-value": "internet.fido.ca",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "fido",
			                "password": "fido",
			                "dns": [
			                  "204.92.15.211",
			                  "207.181.101.4"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Rogers",
			            "gsm": {
			              "network-id": {
			                "-mcc": "302",
			                "-mnc": "720"
			              },
			              "apn": {
			                "-value": "internet.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "wapuser1",
			                "password": "wap",
			                "dns": [
			                  "207.181.101.4",
			                  "207.181.101.5"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Bell Mobility",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "302",
			                  "-mnc": "610"
			                },
			                {
			                  "-mcc": "302",
			                  "-mnc": "640"
			                },
			                {
			                  "-mcc": "302",
			                  "-mnc": "651"
			                },
			                {
			                  "-mcc": "302",
			                  "-mnc": "880"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "inet.bell.ca",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet"
			                },
			                {
			                  "-value": "pda.bell.ca",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Web"
			                },
			                {
			                  "-value": "pda2.bell.ca",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Fast Web"
			                }
			              ]
			            },
			            "cdma": {
			              "sid": [
			                { "-value": "16420" },
			                { "-value": "16440" },
			                { "-value": "16456" },
			                { "-value": "16410" },
			                { "-value": "16444" },
			                { "-value": "16390" },
			                { "-value": "16394" },
			                { "-value": "16402" },
			                { "-value": "16414" },
			                { "-value": "16416" },
			                { "-value": "16418" },
			                { "-value": "16462" },
			                { "-value": "16472" },
			                { "-value": "16408" },
			                { "-value": "16404" },
			                { "-value": "16430" },
			                { "-value": "16396" },
			                { "-value": "16426" },
			                { "-value": "16388" },
			                { "-value": "16390" },
			                { "-value": "16408" },
			                { "-value": "16414" },
			                { "-value": "16430" },
			                { "-value": "16460" },
			                { "-value": "16468" }
			              ]
			            }
			          },
			          {
			            "name": "Telus Mobility",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "302",
			                  "-mnc": "220"
			                },
			                {
			                  "-mcc": "302",
			                  "-mnc": "860"
			                },
			                {
			                  "-mcc": "302",
			                  "-mnc": "880"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "isp.telus.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet"
			                },
			                {
			                  "-value": "vpn.telus.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet (with VPN)"
			                },
			                {
			                  "-value": "bb.telus.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Blackberry"
			                },
			                {
			                  "-value": "sp.telus.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Web/Smartphone"
			                }
			              ]
			            },
			            "cdma": {
			              "sid": [
			                { "-value": "16422" },
			                { "-value": "17500" },
			                { "-value": "16438" },
			                { "-value": "16458" },
			                { "-value": "16436" },
			                { "-value": "16434" },
			                { "-value": "16384" }
			              ]
			            }
			          },
			          { "name": "Virgin Mobile" },
			          {
			            "name": "SaskTel",
			            "cdma": {
			              "sid": [
			                { "-value": "16410" },
			                { "-value": "16412" }
			              ]
			            }
			          },
			          {
			            "name": "Vidéotron",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "302",
			                  "-mnc": "500"
			                },
			                {
			                  "-mcc": "302",
			                  "-mnc": "510"
			                }
			              ],
			              "apn": {
			                "-value": "ihvm.videotron",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "IHVM"
			              }
			            }
			          },
			          {
			            "name": "WIND Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "302",
			                "-mnc": "490"
			              },
			              "apn": [
			                {
			                  "-value": "broadband.windmobile.ca",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Laptop (data stick)"
			                },
			                {
			                  "-value": "internet.windmobile.ca",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile (add-on for phone)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Mobilicity",
			            "gsm": {
			              "network-id": {
			                "-mcc": "302",
			                "-mnc": "320"
			              },
			              "apn": [
			                {
			                  "-value": "wap.davewireless.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Web"
			                },
			                {
			                  "-value": "internet.davewireless.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Broadband"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "cd",
			        "provider": {
			          "name": "Vodacom",
			          "gsm": {
			            "network-id": {
			              "-mcc": "630",
			              "-mnc": "01"
			            },
			            "apn": {
			              "-value": "vodanet",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" },
			              "username": "vodalive",
			              "dns": "172.24.97.1"
			            }
			          }
			        }
			      },
			      { "-code": "cg" },
			      {
			        "-code": "ch",
			        "provider": [
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "228",
			                "-mnc": "03"
			              },
			              "apn": [
			                {
			                  "-value": "mobileoffice3g",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet Everywhere - Standard",
			                  "dns": [
			                    "213.55.128.1",
			                    "213.55.128.2"
			                  ]
			                },
			                {
			                  "-value": "click",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet Everywhere - Prepaid",
			                  "dns": [
			                    "213.55.128.1",
			                    "213.55.128.2"
			                  ]
			                },
			                {
			                  "-value": "intranetaccess",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet Everywhere - Intranet Access"
			                },
			                {
			                  "-value": "internet",
			                  "name": "Internet Everywhere - Postpaid"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Sunrise",
			            "gsm": {
			              "network-id": {
			                "-mcc": "228",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "internet",
			                  "password": "internet",
			                  "dns": [
			                    "194.230.1.103",
			                    "194.230.1.71"
			                  ]
			                },
			                {
			                  "-value": "wap.sunrise.ch",
			                  "username": "wap",
			                  "password": "wap"
			                },
			                {
			                  "-value": "mms.sunrise.ch",
			                  "username": "mms",
			                  "password": "mms"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Swisscom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "228",
			                "-mnc": "01"
			              },
			              "balance-check": { "ussd": "*130#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*123*CODE#"
			                }
			              },
			              "apn": [
			                {
			                  "-value": "gprs.swisscom.ch",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Swisscom GPRS",
			                  "dns": [
			                    "138.188.101.189",
			                    "138.188.101.186"
			                  ]
			                },
			                {
			                  "-value": "corporate.swisscom.ch",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Swisscom CAA",
			                  "username": "testprofil",
			                  "password": "temporary"
			                },
			                {
			                  "-value": "event.swisscom.ch",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Swisscom MMS"
			                }
			              ]
			            }
			          },
			          {
			            "name": "M-Budget",
			            "gsm": {
			              "network-id": {
			                "-mcc": "228",
			                "-mnc": "01"
			              },
			              "msisdn-query": { "ussd": "*#100#" },
			              "apn": {
			                "-value": "gprs.swisscom.ch",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Migros Data"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ci",
			        "provider": {
			          "name": "MTN",
			          "gsm": {
			            "network-id": {
			              "-mcc": "612",
			              "-mnc": "05"
			            },
			            "apn": {
			              "-value": "internet",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" },
			              "dns": "172.16.100.5"
			            }
			          }
			        }
			      },
			      {
			        "-code": "cl",
			        "provider": [
			          {
			            "name": "Claro Chile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "730",
			                "-mnc": "03"
			              },
			              "apn": [
			                {
			                  "-value": "bam.clarochile.cl",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "clarochile",
			                  "password": "clarochile"
			                },
			                {
			                  "-value": "bap.clarochile.cl",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prepago",
			                  "username": "clarochile",
			                  "password": "clarochile"
			                },
			                {
			                  "-value": "wap.clarochile.cl",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "WAP",
			                  "username": "clarochile",
			                  "password": "clarochile"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Entel PCS",
			            "gsm": {
			              "network-id": {
			                "-mcc": "730",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "imovil.entelpcs.cl",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contract / Prepaid / WebSession",
			                  "username": "entelpcs",
			                  "password": "entelpcs"
			                },
			                {
			                  "-value": "bam.entelpcs.cl",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "WAP",
			                  "username": "entelpcs",
			                  "password": "entelpcs"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Movistar",
			            "gsm": {
			              "network-id": {
			                "-mcc": "730",
			                "-mnc": "10"
			              },
			              "apn": [
			                {
			                  "-value": "web.tmovil.cl",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Web",
			                  "username": "web",
			                  "password": "web"
			                },
			                {
			                  "-value": "wap.tmovil.cl",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "WAP",
			                  "username": "wap",
			                  "password": "wap"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "cm",
			        "provider": [
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "624",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "orangecmgprs",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "orange",
			                "password": "orange"
			              }
			            }
			          },
			          {
			            "name": "MTN",
			            "gsm": {
			              "network-id": {
			                "-mcc": "624",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "INTERNET",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "guest",
			                "password": "guest"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "cn",
			        "provider": [
			          {
			            "name": "China Mobile",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "460",
			                  "-mnc": "00"
			                },
			                {
			                  "-mcc": "460",
			                  "-mnc": "02"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "cmwap",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "WAP",
			                  "username": "guest",
			                  "password": "guest"
			                },
			                {
			                  "-value": "cmnet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet",
			                  "username": "guest",
			                  "password": "guest",
			                  "dns": "211.136.20.203"
			                }
			              ]
			            }
			          },
			          {
			            "name": "China Unicom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "460",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "3gnet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "uninet"
			              }
			            }
			          },
			          {
			            "name": "China Telecom",
			            "cdma": {
			              "username": "ctnet@mycdma.cn",
			              "password": "vnet.mobi",
			              "sid": [
			                { "-value": "11296" },
			                { "-value": "11298" }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "cr",
			        "provider": [
			          {
			            "name": "IceCelular",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "712",
			                  "-mnc": "01"
			                },
			                {
			                  "-mcc": "712",
			                  "-mnc": "02"
			                }
			              ],
			              "apn": {
			                "-value": "icecelular",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "guest",
			                "password": "guest",
			                "dns": "208.133.206.44"
			              }
			            }
			          },
			          {
			            "name": "Kolbi",
			            "gsm": {
			              "network-id": {
			                "-mcc": "712",
			                "-mnc": "03"
			              },
			              "voicemail": "190",
			              "balance-check": {
			                "sms": { "#text": "1150" }
			              },
			              "apn": {
			                "-value": "kolbi3g",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Kolbi 3g"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "co",
			        "provider": [
			          {
			            "name": "Claro",
			            "gsm": {
			              "network-id": {
			                "-mcc": "732",
			                "-mnc": "101"
			              },
			              "apn": {
			                "-value": "internet.comcel.com.co",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "COMCELWEB",
			                "password": "COMCELWEB"
			              }
			            }
			          },
			          {
			            "name": "eTb",
			            "gsm": {
			              "apn": {
			                "-value": "moviletb.net.co",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "etb",
			                "password": "etb"
			              }
			            }
			          },
			          {
			            "name": "Movistar",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "732",
			                  "-mnc": "102"
			                },
			                {
			                  "-mcc": "732",
			                  "-mnc": "123"
			                }
			              ],
			              "apn": {
			                "-value": "internet.movistar.com.co",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "movistar",
			                "password": "movistar"
			              }
			            }
			          },
			          {
			            "name": "Tigo",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "732",
			                  "-mnc": "103"
			                },
			                {
			                  "-mcc": "732",
			                  "-mnc": "111"
			                }
			              ],
			              "apn": {
			                "-value": "web.colombiamovil.com.co",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Uff",
			            "gsm": {
			              "apn": {
			                "-value": "web.uffmovil.com.co",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "UNE",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "732",
			                  "-mnc": "103"
			                },
			                {
			                  "-mcc": "732",
			                  "-mnc": "111"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "www.une.net.co",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "une",
			                  "password": "une"
			                },
			                {
			                  "-value": "une4glte.net.co",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "LTE (4G)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Virgin Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "732",
			                "-mnc": "123"
			              },
			              "apn": {
			                "-value": "web.vmc.net.co",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "cy",
			        "provider": [
			          {
			            "name": "Cytamobile-Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "280",
			                "-mnc": "01"
			              },
			              "msisdn-query": { "ussd": "*#109#" },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contract"
			                },
			                {
			                  "-value": "pp.internet",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prepaid"
			                }
			              ]
			            }
			          },
			          {
			            "name": "MTN",
			            "gsm": {
			              "network-id": {
			                "-mcc": "280",
			                "-mnc": "10"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "wap",
			                "password": "wap"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "cz",
			        "provider": [
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "230",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "217.77.161.130",
			                  "217.77.161.131"
			                ]
			              }
			            }
			          },
			          {
			            "name": "O2",
			            "gsm": {
			              "network-id": {
			                "-mcc": "230",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "dns": [
			                    "160.218.10.200",
			                    "160.218.43.200"
			                  ]
			                },
			                {
			                  "-value": "internet.open",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "dns": [
			                    "160.218.10.200",
			                    "160.218.43.200"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "T-Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "230",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet.t-mobile.cz",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "62.141.0.1",
			                  "213.162.65.1"
			                ]
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "de",
			        "provider": [
			          {
			            "name": "AldiTalk/MedionMobile",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "262",
			                  "-mnc": "03"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "05"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "77"
			                }
			              ],
			              "voicemail": "9911",
			              "balance-check": { "ussd": "*100#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*104*CODE#"
			                }
			              },
			              "apn": [
			                {
			                  "-value": "internet.eplus.de",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Volume rate/30 Day Flatrate",
			                  "username": "eplus",
			                  "password": "gprs",
			                  "dns": [
			                    "212.23.97.2",
			                    "212.23.97.3"
			                  ]
			                },
			                {
			                  "-value": "tagesflat.eplus.de",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": [
			                    "24 Hour Flatrate",
			                    {
			                      "-xml:lang": "de",
			                      "#text": "Tages-Flatrate"
			                    }
			                  ],
			                  "username": "eplus",
			                  "password": "gprs"
			                }
			              ]
			            }
			          },
			          {
			            "name": "blau.de",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "262",
			                  "-mnc": "03"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "05"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "77"
			                }
			              ],
			              "balance-check": { "ussd": "*100#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*104*CODE#"
			                }
			              },
			              "apn": [
			                {
			                  "-value": "internet.eplus.de",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "blau",
			                  "password": "blau"
			                },
			                {
			                  "-value": "tagesflat.eplus.de",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": [
			                    "24 Hour Flatrate",
			                    {
			                      "-xml:lang": "de",
			                      "#text": "Tages-Flatrate"
			                    }
			                  ],
			                  "username": "blau",
			                  "password": "blau"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Bild Mobil",
			            "gsm": {
			              "network-id": {
			                "-mcc": "262",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "access.vodafone.de",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "BILD Mobilportal"
			                },
			                {
			                  "-value": "web.vodafone.de",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contract",
			                  "dns": [
			                    "139.7.30.125",
			                    "139.7.30.126"
			                  ]
			                },
			                {
			                  "-value": "event.vodafone.de",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "BILDmobil Speedstick (Surfpakete)"
			                }
			              ]
			            }
			          },
			          {
			            "-primary": "true",
			            "name": "E-Plus",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "262",
			                  "-mnc": "03"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "05"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "77"
			                }
			              ],
			              "balance-check": { "ussd": "*100#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*104*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "internet.eplus.de",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "eplus",
			                "password": "gprs",
			                "dns": [
			                  "212.23.97.2",
			                  "212.23.97.3"
			                ]
			              }
			            }
			          },
			          {
			            "name": "O2",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "262",
			                  "-mnc": "07"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "08"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "11"
			                }
			              ],
			              "voicemail": "333",
			              "balance-check": { "ussd": "*101#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*103*CODE#"
			                }
			              },
			              "apn": [
			                {
			                  "-value": "pinternet.interkom.de",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "LOOP",
			                  "dns": [
			                    "193.189.244.225",
			                    "193.189.244.206"
			                  ]
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Pay-by-MB",
			                  "dns": [
			                    "195.182.110.132",
			                    "62.134.11.4"
			                  ]
			                },
			                {
			                  "-value": "surfo2",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Pay-by-time",
			                  "dns": [
			                    "195.182.110.132",
			                    "62.134.11.4"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Tchibo-Mobil",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "262",
			                  "-mnc": "07"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "08"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "11"
			                }
			              ],
			              "balance-check": { "ussd": "*101#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*103*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "webmobil1",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Tagesflat / Monats-Flatrate L / Monats-Flatrate XL"
			              }
			            }
			          },
			          {
			            "name": "T-Mobile(Telekom)",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "262",
			                  "-mnc": "01"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "06"
			                }
			              ],
			              "voicemail": "3311",
			              "balance-check": { "ussd": "*100#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*101*CODE#"
			                }
			              },
			              "apn": [
			                {
			                  "-value": "internet.t-d1.de",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "password": "t-d1",
			                  "dns": [
			                    "193.254.160.1",
			                    "193.254.160.130"
			                  ]
			                },
			                {
			                  "-value": "internet.t-mobile",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "t-mobile",
			                  "password": "tm",
			                  "dns": [
			                    "10.74.83.22",
			                    "193.254.160.1"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Congstar",
			            "gsm": {
			              "network-id": {
			                "-mcc": "262",
			                "-mnc": "01"
			              },
			              "balance-check": { "ussd": "*100#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*101*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "internet.t-mobile",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "name": "Prepaid Contracts",
			                "username": "t-mobile",
			                "password": "tm",
			                "dns": [
			                  "193.254.160.1",
			                  "10.74.83.22"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "262",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "04"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "09"
			                }
			              ],
			              "voicemail": "5500",
			              "balance-check": { "ussd": "*100#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*100*CODE#"
			                }
			              },
			              "apn": [
			                {
			                  "-value": "web.vodafone.de",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "dns": [
			                    "139.7.30.125",
			                    "139.7.30.126"
			                  ]
			                },
			                {
			                  "-value": "event.vodafone.de",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "WebSessions",
			                  "username": "vodafone",
			                  "password": "vodafone",
			                  "dns": [
			                    "139.7.30.125",
			                    "139.7.30.126"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "FONIC",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "262",
			                  "-mnc": "07"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "08"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "11"
			                }
			              ],
			              "balance-check": { "ussd": "*101#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*103*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "pinternet.interkom.de",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "fonic",
			                "password": "fonic"
			              }
			            }
			          },
			          {
			            "name": "simyo Internet",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "262",
			                  "-mnc": "03"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "05"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "77"
			                }
			              ],
			              "balance-check": { "ussd": "*100#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*104*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "internet.eplus.de",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "simyo",
			                "password": "simyo",
			                "dns": [
			                  "212.23.97.2",
			                  "212.23.97.3"
			                ]
			              }
			            }
			          },
			          {
			            "name": "vistream",
			            "gsm": {
			              "network-id": {
			                "-mcc": "262",
			                "-mnc": "16"
			              },
			              "balance-check": { "ussd": "*100#" },
			              "apn": {
			                "-value": "internet.vistream.net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "web",
			                "password": "vistream"
			              }
			            }
			          },
			          {
			            "name": "solomo",
			            "gsm": {
			              "network-id": {
			                "-mcc": "262",
			                "-mnc": "16"
			              },
			              "balance-check": { "ussd": "*100#" },
			              "apn": {
			                "-value": "internet.vistream.net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "web",
			                "password": "vistream"
			              }
			            }
			          },
			          {
			            "name": "Materna BR",
			            "gsm": {
			              "network-id": {
			                "-mcc": "262",
			                "-mnc": "16"
			              },
			              "apn": {
			                "-value": "internet.vistream.net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "web",
			                "password": "vistream"
			              }
			            }
			          },
			          {
			            "name": "sdt.net",
			            "gsm": {
			              "network-id": {
			                "-mcc": "262",
			                "-mnc": "16"
			              },
			              "apn": {
			                "-value": "internet.vistream.net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "web",
			                "password": "vistream"
			              }
			            }
			          },
			          {
			            "name": "igge & ko",
			            "gsm": {
			              "network-id": {
			                "-mcc": "262",
			                "-mnc": "16"
			              },
			              "apn": {
			                "-value": "internet.vistream.net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "web",
			                "password": "vistream"
			              }
			            }
			          },
			          {
			            "name": "PTT mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "262",
			                "-mnc": "16"
			              },
			              "apn": {
			                "-value": "internet.vistream.net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "web",
			                "password": "vistream"
			              }
			            }
			          },
			          {
			            "name": "TouristMobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "262",
			                "-mnc": "16"
			              },
			              "apn": {
			                "-value": "internet.vistream.net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "web",
			                "password": "vistream"
			              }
			            }
			          },
			          {
			            "name": "SunSIM",
			            "gsm": {
			              "network-id": {
			                "-mcc": "262",
			                "-mnc": "16"
			              },
			              "balance-check": { "ussd": "*100#" },
			              "apn": {
			                "-value": "internet.vistream.net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "web",
			                "password": "vistream"
			              }
			            }
			          },
			          {
			            "name": "SüdkurierTel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "262",
			                "-mnc": "16"
			              },
			              "apn": {
			                "-value": "internet.vistream.net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "web",
			                "password": "vistream"
			              }
			            }
			          },
			          {
			            "name": "NetCologne",
			            "gsm": {
			              "network-id": {
			                "-mcc": "262",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "internet.netcologne.de",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "web",
			                "password": "password"
			              }
			            }
			          },
			          {
			            "name": "Alice",
			            "gsm": {
			              "network-id": {
			                "-mcc": "262",
			                "-mnc": "07"
			              },
			              "apn": {
			                "-value": "internet.partner1",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Option Mobile",
			                "dns": [
			                  "193.189.244.225",
			                  "193.189.244.206"
			                ]
			              }
			            }
			          },
			          {
			            "name": "1&1",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "262",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "04"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "09"
			                }
			              ],
			              "voicemail": "5500",
			              "balance-check": { "ussd": "*100#" },
			              "apn": [
			                {
			                  "-value": "web.vodafone.de",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Broadband"
			                },
			                {
			                  "-value": "mail.partner.de",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Web",
			                  "username": "D2",
			                  "password": "Web"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Netzclub",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "262",
			                  "-mnc": "07"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "08"
			                },
			                {
			                  "-mcc": "262",
			                  "-mnc": "11"
			                }
			              ],
			              "apn": {
			                "-value": "pinternet.interkom.de",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Internet"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "dk",
			        "provider": [
			          {
			            "-primary": "true",
			            "name": "3",
			            "gsm": {
			              "network-id": {
			                "-mcc": "238",
			                "-mnc": "06"
			              },
			              "apn": [
			                {
			                  "-value": "bredband.tre.dk",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Bredbånd (standard)"
			                },
			                {
			                  "-value": "net.tre.dk",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Bredbånd Premium Kontant"
			                },
			                {
			                  "-value": "data.tre.dk",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "3 (standard for mobilkunder; spærret for indgående trafik)"
			                },
			                {
			                  "-value": "static.tre.dk",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "3 (statisk IP)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "OiSTER",
			            "gsm": {
			              "network-id": {
			                "-mcc": "238",
			                "-mnc": "06"
			              },
			              "apn": [
			                {
			                  "-value": "bredband.oister.dk",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Broadband"
			                },
			                {
			                  "-value": "data.dk",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Internet"
			                }
			              ]
			            }
			          },
			          {
			            "name": "ice.net (Nordisk Mobiltelefon)",
			            "cdma": {
			              "username": "cdma",
			              "password": "cdma"
			            }
			          },
			          {
			            "name": "Telenor",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "238",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "238",
			                  "-mnc": "77"
			                }
			              ],
			              "voicemail": "20171717",
			              "balance-check": {
			                "ussd": "*101#",
			                "dtmf": "40454545"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "212.88.64.199",
			                  "212.88.64.14"
			                ]
			              }
			            }
			          },
			          {
			            "name": "CBB Mobil",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "238",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "238",
			                  "-mnc": "77"
			                }
			              ],
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "TDC",
			            "gsm": {
			              "network-id": {
			                "-mcc": "238",
			                "-mnc": "01"
			              },
			              "voicemail": "20171717",
			              "balance-check": {
			                "ussd": "*101#",
			                "dtmf": "40454545"
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "dns": [
			                    "194.239.134.83",
			                    "193.162.153.164"
			                  ]
			                },
			                {
			                  "-value": "internet.no",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" }
			                },
			                {
			                  "-value": "internet.se",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" }
			                }
			              ]
			            }
			          },
			          {
			            "name": "Fullrate",
			            "gsm": {
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "Fullrate",
			                "password": "Fullrate"
			              }
			            }
			          },
			          {
			            "name": "Telia",
			            "gsm": {
			              "network-id": {
			                "-mcc": "238",
			                "-mnc": "30"
			              },
			              "voicemail": "28184000",
			              "balance-check": { "ussd": "*101#" },
			              "apn": {
			                "-value": "www.internet.mtelia.dk",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "BiBoB",
			            "gsm": {
			              "network-id": {
			                "-mcc": "238",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "internet.bibob.dk",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Telmore",
			            "gsm": {
			              "network-id": {
			                "-mcc": "238",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "194.239.134.83",
			                  "193.162.153.164"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Unotel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "238",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "happiimobil",
			            "gsm": {
			              "network-id": {
			                "-mcc": "238",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Onfone Internet DK",
			            "gsm": {
			              "network-id": {
			                "-mcc": "238",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "do",
			        "provider": [
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "370",
			                "-mnc": "01"
			              },
			              "voicemail": "*777",
			              "balance-check": { "ussd": "#131#" },
			              "apn": {
			                "-value": "orangenet.com.do",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Claro",
			            "gsm": {
			              "network-id": {
			                "-mcc": "370",
			                "-mnc": "02"
			              },
			              "voicemail": "*99",
			              "balance-check": {
			                "ussd": "*122#",
			                "dtmf": "*22"
			              },
			              "apn": {
			                "-value": "internet.ideasclaro.com.do",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "196.3.81.5",
			                  "196.3.81.132"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Viva",
			            "gsm": {
			              "network-id": {
			                "-mcc": "370",
			                "-mnc": "04"
			              },
			              "balance-check": {
			                "ussd": "#111#",
			                "dtmf": "*74"
			              },
			              "apn": {
			                "-value": "edge.viva.net.do",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "viva",
			                "password": "viva"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "dz",
			        "provider": [
			          {
			            "name": "Djezzy",
			            "gsm": {
			              "network-id": {
			                "-mcc": "603",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "djezzy.internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Mobilis",
			            "gsm": {
			              "network-id": {
			                "-mcc": "603",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "internet",
			                "password": "internet"
			              }
			            }
			          },
			          {
			            "name": "Nedjma",
			            "gsm": {
			              "network-id": {
			                "-mcc": "603",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "WEB",
			                "username": "nedjma",
			                "password": "nedjma"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ec",
			        "provider": [
			          {
			            "name": "Movistar UMTS",
			            "gsm": {
			              "network-id": {
			                "-mcc": "740",
			                "-mnc": "00"
			              },
			              "apn": {
			                "-value": "navega.movistar.ec",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "movistar",
			                "password": "movistar"
			              }
			            }
			          },
			          {
			            "name": "Porta 3G",
			            "gsm": {
			              "network-id": {
			                "-mcc": "740",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet.porta.com.ec",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ee",
			        "provider": [
			          {
			            "name": "EMT",
			            "gsm": {
			              "network-id": {
			                "-mcc": "248",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet.emt.ee",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "217.71.32.116",
			                  "217.71.32.115"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Nordea",
			            "gsm": {
			              "network-id": {
			                "-mcc": "248",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet.emt.ee",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Elisa",
			            "gsm": {
			              "network-id": {
			                "-mcc": "248",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": "194.204.0.1"
			              }
			            }
			          },
			          {
			            "name": "Tele2",
			            "gsm": {
			              "network-id": {
			                "-mcc": "248",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "internet.tele2.ee",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "wap",
			                "password": "wap"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "eg",
			        "provider": [
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "602",
			                "-mnc": "02"
			              },
			              "msisdn-query": { "ussd": "*878#" },
			              "apn": {
			                "-value": "internet.vodafone.net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "internet",
			                "password": "internet",
			                "dns": [
			                  "163.121.128.134",
			                  "212.103.160.18"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Etisalat",
			            "gsm": {
			              "network-id": {
			                "-mcc": "602",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "etisalat",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "MobiNil",
			            "gsm": {
			              "network-id": {
			                "-mcc": "602",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "mobinilweb",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "80.75.166.250",
			                  "163.121.163.201"
			                ]
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "es",
			        "provider": [
			          {
			            "name": "Euskaltel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "214",
			                "-mnc": "08"
			              },
			              "apn": {
			                "-value": "internet.euskaltel.mobi",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "CLIENTE",
			                "password": "EUSKALTEL"
			              }
			            }
			          },
			          {
			            "name": "Másmovil",
			            "gsm": {
			              "network-id": {
			                "-mcc": "214",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "internetmas",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "móbil R (Mundo-R)",
			            "gsm": {
			              "network-id": {
			                "-mcc": "214",
			                "-mnc": "17"
			              },
			              "apn": {
			                "-value": "internet.mundo-r.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "moviData",
			            "gsm": {
			              "network-id": {
			                "-mcc": "214",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "INTERNETTPH",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "213.143.33.8",
			                  "62.36.225.150"
			                ]
			              }
			            }
			          },
			          {
			            "name": "ONO",
			            "gsm": {
			              "network-id": {
			                "-mcc": "214",
			                "-mnc": "18"
			              },
			              "apn": {
			                "-value": "internet.ono.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "62.42.230.24",
			                  "62.42.63.52"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Pepephone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "214",
			                "-mnc": "06"
			              },
			              "apn": {
			                "-value": "gprs.pepephone.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "214",
			                  "-mnc": "03"
			                },
			                {
			                  "-mcc": "214",
			                  "-mnc": "09"
			                }
			              ],
			              "voicemail": "242",
			              "balance-check": {
			                "ussd": [
			                  "*111#",
			                  "*113#"
			                ]
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Orange",
			                "username": "ORANGE",
			                "password": "ORANGE",
			                "dns": [
			                  "85.62.229.133",
			                  "85.62.229.134"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Simyo/Blau",
			            "gsm": {
			              "network-id": {
			                "-mcc": "214",
			                "-mnc": "19"
			              },
			              "apn": {
			                "-value": "gprs-service.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "195.230.105.134",
			                  "195.230.105.135"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Telecable",
			            "gsm": {
			              "network-id": {
			                "-mcc": "214",
			                "-mnc": "16"
			              },
			              "apn": {
			                "-value": "internet.telecable.es",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "telecable",
			                "password": "telecable"
			              }
			            }
			          },
			          {
			            "name": "Movistar (Telefónica)",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "214",
			                  "-mnc": "05"
			                },
			                {
			                  "-mcc": "214",
			                  "-mnc": "07"
			                }
			              ],
			              "voicemail": "123",
			              "balance-check": { "dtmf": "2266" },
			              "apn": [
			                {
			                  "-value": "telefonica.es",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Telefónica",
			                  "username": "telefonica",
			                  "password": "telefonica",
			                  "dns": [
			                    "194.179.1.100",
			                    "194.179.1.101"
			                  ]
			                },
			                {
			                  "-value": "movistar.es",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Movistar (USB modems)",
			                  "username": "movistar",
			                  "password": "movistar"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Vodafone (Airtel)",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "214",
			                  "-mnc": "01"
			                },
			                {
			                  "-mcc": "214",
			                  "-mnc": "06"
			                }
			              ],
			              "msisdn-query": { "ussd": "*138#" },
			              "apn": [
			                {
			                  "-value": "ac.vodafone.es",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Vodafone",
			                  "username": "vodafone",
			                  "password": "vodafone",
			                  "dns": [
			                    "212.73.32.96",
			                    "212.73.32.67"
			                  ]
			                },
			                {
			                  "-value": "airtelnet.es",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Airtel (old)",
			                  "username": "vodafone",
			                  "password": "vodafone",
			                  "dns": [
			                    "212.73.32.3",
			                    "212.73.32.67"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Yoigo",
			            "gsm": {
			              "network-id": {
			                "-mcc": "214",
			                "-mnc": "04"
			              },
			              "voicemail": "633",
			              "balance-check": { "ussd": "*111#" },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "213.248.76.210",
			                  "213.248.100.54"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Jazztel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "214",
			                "-mnc": "21"
			              },
			              "apn": {
			                "-value": "jazzinternet",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "87.216.1.65",
			                  "87.216.1.66"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Carrefour Móvil",
			            "gsm": {
			              "apn": {
			                "-value": "CARREFOURINTERNET",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Eroski Móvil",
			            "gsm": {
			              "network-id": {
			                "-mcc": "214",
			                "-mnc": "24"
			              },
			              "apn": {
			                "-value": "gprs.eroskimovil.es",
			                "name": "Eroski Móvil GPRS",
			                "username": "wap@wap",
			                "password": "wap125"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "et",
			        "provider": {
			          "name": "Ethio Telecom",
			          "gsm": {
			            "network-id": {
			              "-mcc": "636",
			              "-mnc": "01"
			            },
			            "balance-check": { "ussd": "*804#" },
			            "apn": {
			              "-value": "etc.com",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" },
			              "dns": [
			                "213.55.96.148",
			                "213.55.96.166"
			              ]
			            }
			          },
			          "cdma": {
			            "username": "etc",
			            "password": "etc"
			          }
			        }
			      },
			      {
			        "-code": "fo",
			        "provider": {
			          "name": "Vodafone FO",
			          "gsm": {
			            "network-id": {
			              "-mcc": "288",
			              "-mnc": "02"
			            },
			            "msisdn-query": { "ussd": "*#100#" },
			            "apn": {
			              "-value": "vmc.vodafone.fo",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" }
			            }
			          }
			        }
			      },
			      {
			        "-code": "fi",
			        "provider": [
			          {
			            "name": "Dna",
			            "gsm": {
			              "network-id": {
			                "-mcc": "244",
			                "-mnc": "03"
			              },
			              "balance-check": {
			                "ussd": "*100#",
			                "dtmf": "0800412582",
			                "sms": {
			                  "-text": "SALDO",
			                  "#text": "14000"
			                }
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "dna internet",
			                "dns": [
			                  "217.78.192.22",
			                  "217.78.192.78"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Elisa",
			            "gsm": {
			              "network-id": {
			                "-mcc": "244",
			                "-mnc": "05"
			              },
			              "voicemail": "777",
			              "balance-check": {
			                "dtmf": "080090598",
			                "sms": [
			                  {
			                    "-text": "SALDO",
			                    "#text": "18258"
			                  },
			                  {
			                    "-text": "PAKETTI",
			                    "#text": "18258"
			                  }
			                ]
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Saunalahti",
			            "gsm": {
			              "network-id": {
			                "-mcc": "244",
			                "-mnc": "21"
			              },
			              "balance-check": {
			                "sms": [
			                  {
			                    "-text": "SALDO",
			                    "#text": "16304"
			                  },
			                  {
			                    "-text": "SALDO",
			                    "#text": "15045"
			                  },
			                  {
			                    "-text": "KOKOSALDO",
			                    "#text": "16304"
			                  },
			                  {
			                    "-text": "GSALDO",
			                    "#text": "16304"
			                  },
			                  {
			                    "-text": "PAKETTI",
			                    "#text": "16304"
			                  }
			                ]
			              },
			              "apn": [
			                {
			                  "-value": "internet.saunalahti",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Postpaid (contract) NAT (available for all subscribers)",
			                  "dns": [
			                    "195.74.0.47",
			                    "195.197.54.100"
			                  ]
			                },
			                {
			                  "-value": "internet4",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Postpaid (contract) public IP address (needs to be ordered)",
			                  "dns": [
			                    "195.74.0.47",
			                    "195.197.54.100"
			                  ]
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prepaid (no contract)",
			                  "dns": [
			                    "195.74.0.47",
			                    "195.197.54.100"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Sonera",
			            "gsm": {
			              "network-id": {
			                "-mcc": "244",
			                "-mnc": "91"
			              },
			              "balance-check": {
			                "sms": {
			                  "-text": "EASY SALDO",
			                  "#text": "15400"
			                }
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "dns": [
			                    "192.89.123.230",
			                    "192.89.123.231"
			                  ]
			                },
			                {
			                  "-value": "prointernet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prointernet (public IP)",
			                  "dns": [
			                    "192.89.123.230",
			                    "192.89.123.231"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Welho",
			            "gsm": {
			              "apn": {
			                "-value": "internet.welho.fi",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Wekkula"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "fj",
			        "provider": {
			          "name": "Vodafone / Kidanet",
			          "gsm": {
			            "network-id": {
			              "-mcc": "542",
			              "-mnc": "01"
			            },
			            "msisdn-query": { "ussd": "*999#" },
			            "apn": [
			              {
			                "-value": "vfinternet.fj",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              },
			              {
			                "-value": "kidanet.fj",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              },
			              {
			                "-value": "prepay.vfinternet.fj",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" }
			              }
			            ]
			          }
			        }
			      },
			      {
			        "-code": "fr",
			        "provider": [
			          {
			            "name": "A Mobile (Auchan Telecom)",
			            "gsm": {
			              "apn": {
			                "-value": "wap65",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Bouygues Telecom",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "208",
			                  "-mnc": "20"
			                },
			                {
			                  "-mcc": "208",
			                  "-mnc": "21"
			                }
			              ],
			              "voicemail": "660",
			              "balance-check": { "dtmf": "630" },
			              "apn": [
			                {
			                  "-value": "a2bouygtel.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contrat Pro Data Illimité",
			                  "dns": "62.201.129.99"
			                },
			                {
			                  "-value": "b2bouygtel.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "B2Bouygtel",
			                  "dns": "62.201.129.99"
			                },
			                {
			                  "-value": "ebouygtel.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Forfait Data",
			                  "dns": "62.201.129.99"
			                },
			                {
			                  "-value": "mmsbouygtel.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Forfait Data",
			                  "dns": "62.201.129.99"
			                },
			                {
			                  "-value": "pcebouygtel.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contrat Pro Data",
			                  "dns": "62.201.129.99"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Free Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "208",
			                "-mnc": "15"
			              },
			              "apn": [
			                {
			                  "-value": "free",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Free-Mobile",
			                  "username": "free",
			                  "password": "free"
			                },
			                {
			                  "-value": "mmsfree",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "mms" },
			                  "name": "Free-Mobile"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "208",
			                  "-mnc": "01"
			                },
			                {
			                  "-mcc": "208",
			                  "-mnc": "00"
			                }
			              ],
			              "voicemail": "888",
			              "balance-check": { "ussd": "#123#" },
			              "apn": [
			                {
			                  "-value": "orange.fr",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Orange Internet",
			                  "dns": [
			                    "194.51.3.56",
			                    "194.51.3.76"
			                  ]
			                },
			                {
			                  "-value": "internet-entreprise",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Business Contract",
			                  "dns": [
			                    "194.51.3.56",
			                    "194.51.3.76"
			                  ]
			                },
			                {
			                  "-value": "orange",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "No Contract / Mobicarte",
			                  "username": "orange",
			                  "password": "orange",
			                  "dns": [
			                    "194.51.3.56",
			                    "194.51.3.76"
			                  ]
			                },
			                {
			                  "-value": "orange-mib",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Orange Entreprises",
			                  "username": "mportail",
			                  "password": "mib",
			                  "dns": [
			                    "172.17.0.2",
			                    "172.17.0.4"
			                  ]
			                },
			                {
			                  "-value": "orange-acte",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "mms" },
			                  "name": "Orange MMS",
			                  "username": "orange",
			                  "password": "orange"
			                },
			                {
			                  "-value": "orange.ie",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet Everywhere 3G"
			                }
			              ]
			            }
			          },
			          {
			            "name": "SFR",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "208",
			                  "-mnc": "10"
			                },
			                {
			                  "-mcc": "208",
			                  "-mnc": "11"
			                }
			              ],
			              "msisdn-query": {
			                "sms": {
			                  "-text": "ABCd84367",
			                  "#text": "9445"
			                }
			              },
			              "voicemail": "123",
			              "balance-check": { "dtmf": "950" },
			              "apn": [
			                {
			                  "-value": "websfr",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Web / Prepaid",
			                  "dns": [
			                    "172.20.2.10",
			                    "172.20.2.39"
			                  ]
			                },
			                {
			                  "-value": "wapsfr",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "WAP"
			                },
			                {
			                  "-value": "internetpro",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "SFR internetpro"
			                },
			                {
			                  "-value": "ipnet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "SFR ipnet"
			                },
			                {
			                  "-value": "slsfr",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Broadband",
			                  "dns": [
			                    "172.20.2.10",
			                    "172.20.2.39"
			                  ]
			                },
			                {
			                  "-value": "sl2sfr",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Full Internet (Webphone)"
			                },
			                {
			                  "-value": "internetneuf",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet (Neuf Telecom)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Transatel Telecom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "208",
			                "-mnc": "22"
			              },
			              "apn": {
			                "-value": "netgprs.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "TEN",
			            "gsm": {
			              "network-id": {
			                "-mcc": "208",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "ao.fr",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "orange",
			                  "password": "orange"
			                },
			                {
			                  "-value": "ofnew.fr",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Pay-by-MB",
			                  "username": "orange",
			                  "password": "orange"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "gb",
			        "provider": [
			          {
			            "name": "Asda Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "234",
			                "-mnc": "15"
			              },
			              "apn": {
			                "-value": "asdamobiles.co.uk",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "username": "web",
			                "password": "web"
			              }
			            }
			          },
			          {
			            "name": "BT Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "234",
			                "-mnc": "00"
			              },
			              "apn": {
			                "-value": "btmobile.bt.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "bt",
			                "password": "bt"
			              }
			            }
			          },
			          {
			            "name": "giffgaff",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "234",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "234",
			                  "-mnc": "10"
			                },
			                {
			                  "-mcc": "234",
			                  "-mnc": "11"
			                }
			              ],
			              "voicemail": "443",
			              "balance-check": { "ussd": "*100#" },
			              "apn": {
			                "-value": "giffgaff.com",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "name": "Mobile Broadband",
			                "username": "giffgaff",
			                "password": "password"
			              }
			            }
			          },
			          {
			            "name": "O2",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "234",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "234",
			                  "-mnc": "10"
			                },
			                {
			                  "-mcc": "234",
			                  "-mnc": "11"
			                }
			              ],
			              "voicemail": "901",
			              "balance-check": {
			                "ussd": "*#10#",
			                "dtmf": "4444"
			              },
			              "apn": [
			                {
			                  "-value": "mobile.o2.co.uk",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contract",
			                  "username": "o2web",
			                  "password": "password",
			                  "dns": [
			                    "193.113.200.200",
			                    "193.113.200.201"
			                  ]
			                },
			                {
			                  "-value": "mobile.o2.co.uk",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contract (faster)",
			                  "username": "faster",
			                  "password": "password",
			                  "dns": [
			                    "193.113.200.200",
			                    "193.113.200.201"
			                  ]
			                },
			                {
			                  "-value": "payandgo.o2.co.uk",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Pay and Go (Prepaid)",
			                  "username": "payandgo",
			                  "password": "payandgo"
			                },
			                {
			                  "-value": "idata.o2.co.uk",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "iPhone (Contract)",
			                  "username": "vertigo",
			                  "password": "password"
			                },
			                {
			                  "-value": "m-bb.o2.co.uk",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Broadband",
			                  "username": "o2bb",
			                  "password": "password",
			                  "dns": [
			                    "82.132.254.2",
			                    "82.132.254.3"
			                  ]
			                },
			                {
			                  "-value": "wap.o2.co.uk",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "WAP",
			                  "username": "o2wap",
			                  "password": "password"
			                }
			              ]
			            }
			          },
			          {
			            "name": "TalkTalk",
			            "gsm": {
			              "apn": {
			                "-value": "mobile.talktalk.co.uk",
			                "gateway": "212.183.137.12:8799",
			                "username": "wap",
			                "password": "wap"
			              }
			            }
			          },
			          {
			            "name": "T-Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "234",
			                "-mnc": "30"
			              },
			              "voicemail": "222",
			              "balance-check": {
			                "dtmf": "150",
			                "sms": [
			                  {
			                    "-text": "BA",
			                    "#text": "150"
			                  },
			                  {
			                    "-text": "AL",
			                    "#text": "150"
			                  }
			                ]
			              },
			              "apn": [
			                {
			                  "-value": "general.t-mobile.uk",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "User",
			                  "password": "mms",
			                  "dns": [
			                    "149.254.201.126",
			                    "149.254.192.126"
			                  ]
			                },
			                {
			                  "-value": "general.t-mobile.uk",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "dns": [
			                    "149.254.230.7",
			                    "149.254.199.126"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Tesco Mobile",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "234",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "234",
			                  "-mnc": "10"
			                },
			                {
			                  "-mcc": "234",
			                  "-mnc": "11"
			                }
			              ],
			              "apn": {
			                "-value": "prepay.tesco-mobile.com",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "username": "tescowap",
			                "password": "password",
			                "dns": "193.113.200.195"
			              }
			            }
			          },
			          {
			            "name": "Virgin Mobile",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "234",
			                  "-mnc": "31"
			                },
			                {
			                  "-mcc": "234",
			                  "-mnc": "32"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "vdata",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "dns": [
			                    "196.7.0.138",
			                    "196.7.142.132"
			                  ]
			                },
			                {
			                  "-value": "goto.virginmobile.uk",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "user"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "234",
			                "-mnc": "15"
			              },
			              "msisdn-query": { "ussd": "*#100#" },
			              "voicemail": "121",
			              "balance-check": {
			                "ussd": "*#1345#",
			                "dtmf": "2345"
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contract",
			                  "username": "web",
			                  "password": "web",
			                  "dns": [
			                    "10.206.65.68",
			                    "10.203.65.68"
			                  ]
			                },
			                {
			                  "-value": "pp.vodafone.co.uk",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prepaid",
			                  "username": "web",
			                  "password": "web",
			                  "dns": [
			                    "172.29.1.11",
			                    "172.29.1.11"
			                  ]
			                },
			                {
			                  "-value": "ppbundle.internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "TopUp and Go",
			                  "username": "web",
			                  "password": "web",
			                  "dns": [
			                    "10.203.129.68",
			                    "10.203.129.68"
			                  ]
			                },
			                {
			                  "-value": "pp.internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "TopUp and Go (older 1GB SIMs)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "3",
			            "gsm": {
			              "network-id": {
			                "-mcc": "234",
			                "-mnc": "20"
			              },
			              "apn": [
			                {
			                  "-value": "3internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet"
			                },
			                {
			                  "-value": "three.co.uk",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Handsets",
			                  "dns": [
			                    "172.30.139.17",
			                    "172.31.139.17"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "234",
			                  "-mnc": "33"
			                },
			                {
			                  "-mcc": "234",
			                  "-mnc": "34"
			                }
			              ],
			              "voicemail": "123",
			              "balance-check": { "dtmf": "453" },
			              "apn": [
			                {
			                  "-value": "orangeinternet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contract",
			                  "username": "orange",
			                  "password": "orange",
			                  "dns": [
			                    "193.35.133.10",
			                    "193.35.134.10"
			                  ]
			                },
			                {
			                  "-value": "internetvpn",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contract (with VPN)",
			                  "username": "orange",
			                  "password": "orange",
			                  "dns": [
			                    "193.35.133.10",
			                    "193.35.134.10"
			                  ]
			                },
			                {
			                  "-value": "orangewap",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "Orange WAP",
			                  "username": "orange",
			                  "password": "multimedia",
			                  "dns": [
			                    "158.43.192.1",
			                    "158.43.128.1"
			                  ]
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ge",
			        "provider": {
			          "name": "Geocell",
			          "gsm": {
			            "network-id": {
			              "-mcc": "282",
			              "-mnc": "01"
			            },
			            "apn": {
			              "-value": "Internet",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" },
			              "dns": [
			                "212.72.130.20",
			                "212.72.152.001"
			              ]
			            }
			          }
			        }
			      },
			      {
			        "-code": "gg",
			        "provider": [
			          {
			            "name": "Airtel-Vodaphone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "234",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "airtel-ci-gprs.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Sure (Cable & Wireless)",
			            "gsm": {
			              "network-id": {
			                "-mcc": "234",
			                "-mnc": "55"
			              },
			              "apn": [
			                {
			                  "-value": "wap",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "WAP"
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Wave Telecom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "234",
			                "-mnc": "50"
			              },
			              "apn": {
			                "-value": "pepper",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "212.9.0.135",
			                  "212.9.0.136"
			                ]
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "gh",
			        "provider": [
			          {
			            "name": "MTN",
			            "gsm": {
			              "network-id": {
			                "-mcc": "620",
			                "-mnc": "01"
			              },
			              "balance-check": { "ussd": "*124#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*125*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "620",
			                "-mnc": "02"
			              },
			              "msisdn-query": { "ussd": "*127#" },
			              "balance-check": { "ussd": "*122#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*123*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "browse",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Tigo",
			            "gsm": {
			              "network-id": {
			                "-mcc": "620",
			                "-mnc": "03"
			              },
			              "balance-check": { "ussd": "*820#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*842*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "web.tigo.com.gh",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "web"
			              }
			            }
			          },
			          {
			            "name": "Airtel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "620",
			                "-mnc": "06"
			              },
			              "balance-check": { "ussd": "*133#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*134*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "GloGhana",
			            "gsm": {
			              "network-id": {
			                "-mcc": "620",
			                "-mnc": "07"
			              },
			              "balance-check": { "ussd": "*124#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*123*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Expresso",
			            "cdma": {
			              "username": "evdo@expresso.com",
			              "password": "evdo"
			            }
			          }
			        ]
			      },
			      {
			        "-code": "gr",
			        "provider": [
			          {
			            "name": "Cosmote",
			            "gsm": {
			              "network-id": {
			                "-mcc": "202",
			                "-mnc": "01"
			              },
			              "voicemail": "123",
			              "balance-check": {
			                "dtmf": "1314",
			                "sms": {
			                  "-text": "YP",
			                  "#text": "1314"
			                }
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "202",
			                "-mnc": "05"
			              },
			              "voicemail": "121",
			              "balance-check": {
			                "dtmf": "1252",
			                "sms": {
			                  "-text": "Y",
			                  "#text": "1252"
			                }
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contract"
			                },
			                {
			                  "-value": "web.session",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Broadband On Demand",
			                  "dns": [
			                    "213.249.17.10",
			                    "213.249.17.11"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Wind",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "202",
			                  "-mnc": "09"
			                },
			                {
			                  "-mcc": "202",
			                  "-mnc": "10"
			                }
			              ],
			              "voicemail": [
			                "122",
			                "1333"
			              ],
			              "balance-check": {
			                "dtmf": [
			                  "1269",
			                  "1225"
			                ],
			                "sms": [
			                  { "#text": "1269" },
			                  { "#text": "1225" }
			                ]
			              },
			              "apn": {
			                "-value": "gint.b-online.gr",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "web",
			                "password": "web"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "gt",
			        "provider": [
			          {
			            "name": "Claro",
			            "gsm": {
			              "network-id": {
			                "-mcc": "704",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet.ideasclaro",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Comcel / Tigo",
			            "gsm": {
			              "network-id": {
			                "-mcc": "704",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "Wap.tigo.gt",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "Wap",
			                "password": "Wap"
			              }
			            }
			          },
			          {
			            "name": "Movistar",
			            "gsm": {
			              "network-id": {
			                "-mcc": "704",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "internet.movistar.gt",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "movistargt",
			                "password": "movistargt"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "gy",
			        "provider": [
			          {
			            "name": "GT&T Cellink Plus",
			            "gsm": {
			              "network-id": {
			                "-mcc": "738",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "wap.cellinkgy.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "test",
			                "password": "test"
			              }
			            }
			          },
			          {
			            "name": "DigiCel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "738",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "web",
			                "password": "web"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "hk",
			        "provider": [
			          {
			            "name": "CSL",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "454",
			                  "-mnc": "00"
			                },
			                {
			                  "-mcc": "454",
			                  "-mnc": "02"
			                }
			              ],
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "202.84.255.1",
			                  "203.116.254.150"
			                ]
			              }
			            }
			          },
			          {
			            "name": "New World",
			            "gsm": {
			              "network-id": {
			                "-mcc": "454",
			                "-mnc": "10"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "China Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "454",
			                "-mnc": "12"
			              },
			              "apn": {
			                "-value": "peoples.net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "SmarTone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "454",
			                "-mnc": "06"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "PCCW (Sunday)",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "454",
			                  "-mnc": "16"
			                },
			                {
			                  "-mcc": "454",
			                  "-mnc": "19"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Sunday (Old)"
			                },
			                {
			                  "-value": "pccwdata",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "PCCW 2G/GPRS"
			                },
			                {
			                  "-value": "pccw",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "PCCW 3G"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Sunday",
			            "gsm": {
			              "network-id": {
			                "-mcc": "454",
			                "-mnc": "16"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "454",
			                "-mnc": "04"
			              },
			              "apn": {
			                "-value": "web.orangehk.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Three",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "454",
			                  "-mnc": "03"
			                },
			                {
			                  "-mcc": "454",
			                  "-mnc": "04"
			                }
			              ],
			              "apn": {
			                "-value": "mobile.three.com.hk",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "hn",
			        "provider": {
			          "name": "Tigo",
			          "gsm": {
			            "network-id": {
			              "-mcc": "708",
			              "-mnc": "02"
			            },
			            "apn": {
			              "-value": "internet.tigo.hn",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" }
			            }
			          }
			        }
			      },
			      {
			        "-code": "hr",
			        "provider": [
			          {
			            "name": "T-Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "219",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "web.htgprs",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": "10.12.0.1"
			              }
			            }
			          },
			          {
			            "name": "VIPNET",
			            "gsm": {
			              "network-id": {
			                "-mcc": "219",
			                "-mnc": "10"
			              },
			              "apn": [
			                {
			                  "-value": "data.vip.hr",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contract and Prepaid"
			                },
			                {
			                  "-value": "gprs5.vipnet.hr",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS 5",
			                  "username": "38591",
			                  "password": "38591",
			                  "dns": "195.29.159.15"
			                },
			                {
			                  "-value": "gprs0.vipnet.hr",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS 0",
			                  "username": "38591",
			                  "password": "38591",
			                  "dns": "195.29.159.15"
			                },
			                {
			                  "-value": "3g.vip.hr",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "3G",
			                  "username": "38591",
			                  "password": "38591",
			                  "dns": [
			                    "212.91.97.3",
			                    "212.91.97.4"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "CARNet VIPNET",
			            "gsm": {
			              "network-id": {
			                "-mcc": "219",
			                "-mnc": "10"
			              },
			              "apn": {
			                "-value": "carnet.vip.hr",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "AAIEDU"
			              }
			            }
			          },
			          {
			            "name": "CARNet Tele2",
			            "gsm": {
			              "network-id": {
			                "-mcc": "219",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "carnet.tele2.hr",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "AAIEDU"
			              }
			            }
			          },
			          {
			            "name": "Tele2",
			            "gsm": {
			              "network-id": {
			                "-mcc": "219",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "mobileinternet.tele2.hr",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": "212.247.156.66"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "hu",
			        "provider": [
			          {
			            "name": "Telenor",
			            "gsm": {
			              "network-id": {
			                "-mcc": "216",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "mobilinternet",
			                "dns": [
			                  "217.79.128.40",
			                  "217.79.128.45"
			                ]
			              }
			            }
			          },
			          {
			            "name": "DIGI",
			            "gsm": {
			              "network-id": {
			                "-mcc": "216",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "digi",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "DIGI Move"
			              }
			            }
			          },
			          {
			            "name": "T-Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "216",
			                "-mnc": "30"
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "dns": [
			                    "212.51.115.1",
			                    "194.176.224.6"
			                  ]
			                },
			                {
			                  "-value": "mms-westel",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "mms" },
			                  "name": "MMS",
			                  "username": "mms",
			                  "dns": [
			                    "212.51.115.1",
			                    "194.176.224.3"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "216",
			                "-mnc": "70"
			              },
			              "apn": [
			                {
			                  "-value": "standardnet.vodafone.net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Előf. Normál",
			                  "username": "vodawap",
			                  "password": "vodawap",
			                  "dns": [
			                    "80.244.97.30",
			                    "80.244.96.1"
			                  ]
			                },
			                {
			                  "-value": "internet.vodafone.net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Előf. töm.",
			                  "dns": [
			                    "80.244.97.30",
			                    "80.244.96.1"
			                  ]
			                },
			                {
			                  "-value": "vitamax.snet.vodafone.net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Felt. norm.",
			                  "dns": [
			                    "80.244.97.30",
			                    "80.244.96.1"
			                  ]
			                },
			                {
			                  "-value": "vitamax.internet.vodafone.net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Vodafone (felt. töm.)",
			                  "dns": [
			                    "80.244.97.30",
			                    "80.244.96.1"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Invitel",
			            "gsm": {
			              "apn": {
			                "-value": "invitel.mobilnet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "net.and.go"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "id",
			        "provider": [
			          {
			            "name": "3",
			            "gsm": {
			              "network-id": {
			                "-mcc": "510",
			                "-mnc": "89"
			              },
			              "apn": [
			                {
			                  "-value": "3gprs",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS",
			                  "username": "3gprs",
			                  "password": "3gprs"
			                },
			                {
			                  "-value": "3data",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": [
			                    "Monthly Internet Service",
			                    {
			                      "-xml:lang": "id",
			                      "#text": "Layanan Internet Bulanan"
			                    }
			                  ],
			                  "username": "3data",
			                  "password": "3data"
			                }
			              ]
			            }
			          },
			          {
			            "name": "AXIS",
			            "gsm": {
			              "network-id": {
			                "-mcc": "510",
			                "-mnc": "08"
			              },
			              "apn": {
			                "-value": "AXIS",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "axis",
			                "password": "123456"
			              }
			            }
			          },
			          {
			            "name": "Indosat",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "510",
			                  "-mnc": "21"
			                },
			                {
			                  "-mcc": "510",
			                  "-mnc": "01"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "indosatgprs",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "IM3/Mentari Time-based",
			                  "username": "indosat@durasi",
			                  "password": "indosat@durasi"
			                },
			                {
			                  "-value": "indosatgprs",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "IM3/Mentari Volume-based",
			                  "username": "indosat",
			                  "password": "indosat"
			                },
			                {
			                  "-value": "indosatgprs",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Matrix 3G/3.5G",
			                  "username": "indosat",
			                  "password": "indosat"
			                }
			              ]
			            },
			            "cdma": {
			              "name": "StarOne",
			              "username": "starone",
			              "password": "indosat",
			              "sid": [
			                { "-value": "10817" },
			                { "-value": "10819" }
			              ]
			            }
			          },
			          {
			            "name": "Telkomsel",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "510",
			                  "-mnc": "10"
			                },
			                {
			                  "-mcc": "510",
			                  "-mnc": "20"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "telkomsel",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "wap",
			                  "password": "wap123",
			                  "dns": [
			                    "202.152.0.2",
			                    "202.155.14.251"
			                  ]
			                },
			                {
			                  "-value": "flash",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Flash Time-based",
			                  "username": "foo",
			                  "password": "bar"
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Flash Volume-based",
			                  "username": "foo",
			                  "password": "bar"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Excelcomindo (XL)",
			            "gsm": {
			              "network-id": {
			                "-mcc": "510",
			                "-mnc": "11"
			              },
			              "apn": {
			                "-value": "www.xlgprs.net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "xlgprs",
			                "password": "proxl",
			                "dns": [
			                  "202.152.254.245",
			                  "202.152.254.246"
			                ]
			              }
			            }
			          },
			          {
			            "name": "SMART",
			            "cdma": {
			              "username": "smart",
			              "password": "smart",
			              "sid": { "-value": "10608" }
			            }
			          },
			          {
			            "name": "Ceria",
			            "cdma": {
			              "username": "internet",
			              "password": "ceria"
			            }
			          },
			          {
			            "name": "Fren",
			            "cdma": {
			              "username": "m8",
			              "password": "m8",
			              "sid": { "-value": "10530" }
			            }
			          },
			          {
			            "name": "Telkom Flexy",
			            "cdma": {
			              "username": "telkomnet@flexi",
			              "password": "telkom",
			              "sid": { "-value": "10496" }
			            }
			          },
			          {
			            "name": "Esia",
			            "cdma": {
			              "sid": { "-value": "10623" }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ie",
			        "provider": [
			          {
			            "name": "O2",
			            "gsm": {
			              "network-id": {
			                "-mcc": "272",
			                "-mnc": "02"
			              },
			              "balance-check": { "ussd": "*#100#" },
			              "apn": [
			                {
			                  "-value": "open.internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contract",
			                  "username": "gprs",
			                  "password": "gprs",
			                  "dns": [
			                    "62.40.32.33",
			                    "62.40.32.34"
			                  ]
			                },
			                {
			                  "-value": "pp.internet",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prepaid",
			                  "username": "faster",
			                  "password": "web",
			                  "dns": [
			                    "62.40.32.33",
			                    "62.40.32.34"
			                  ]
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Old Config Internet and MMS"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "272",
			                "-mnc": "01"
			              },
			              "msisdn-query": {
			                "sms": {
			                  "-text": "MYMSISDN:",
			                  "#text": "50189"
			                }
			              },
			              "apn": [
			                {
			                  "-value": "hs.vodafone.ie",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "vodafone",
			                  "password": "vodafone",
			                  "dns": [
			                    "89.19.64.36",
			                    "89.19.64.164"
			                  ]
			                },
			                {
			                  "-value": "isp.vodafone.ie",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Old",
			                  "username": "vodafone",
			                  "password": "vodafone"
			                },
			                {
			                  "-value": "live.vodafone.com",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prepaid",
			                  "username": "vodafone",
			                  "password": "vodafone",
			                  "dns": "10.24.59.100"
			                }
			              ]
			            }
			          },
			          {
			            "name": "E-Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "272",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "broadband.eircommbb.ie",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Broadband To Go",
			                "dns": [
			                  "212.129.64.220",
			                  "212.129.64.221"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Meteor",
			            "gsm": {
			              "network-id": {
			                "-mcc": "272",
			                "-mnc": "03"
			              },
			              "apn": [
			                {
			                  "-value": "data.mymeteor.ie",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Meteor Data",
			                  "username": "my",
			                  "password": "meteor"
			                },
			                {
			                  "-value": "broadband.mymeteor.ie",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Broadband To Go",
			                  "dns": [
			                    "212.129.64.220",
			                    "212.129.64.221"
			                  ]
			                },
			                {
			                  "-value": "isp.mymeteor.ie",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS",
			                  "username": "my",
			                  "password": "isp"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Three Ireland",
			            "gsm": {
			              "network-id": {
			                "-mcc": "272",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "3ireland.ie",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "172.31.140.69",
			                  "172.30.140.69"
			                ]
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "il",
			        "provider": [
			          {
			            "name": "CellCom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "425",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "internetg",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "GolanTelecom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "425",
			                "-mnc": "08"
			              },
			              "apn": {
			                "-value": "internet.golantelecom.net.il",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Home Cellular",
			            "gsm": {
			              "network-id": {
			                "-mcc": "425",
			                "-mnc": "15"
			              },
			              "apn": {
			                "-value": "hcminternet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Hot Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "425",
			                "-mnc": "07"
			              },
			              "apn": {
			                "-value": "net.hotm",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "425",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "uinternet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "3G Internet",
			                "dns": [
			                  "158.43.192.1",
			                  "158.43.128.1"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Pelephone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "425",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "internet.pelephone.net.il",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "3G",
			                "username": "pcl@3g",
			                "password": "pcl"
			              }
			            }
			          },
			          {
			            "name": "Rami Levi",
			            "gsm": {
			              "network-id": {
			                "-mcc": "425",
			                "-mnc": "16"
			              },
			              "apn": {
			                "-value": "internet.rl",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "rl@3g",
			                "password": "rl"
			              }
			            }
			          },
			          {
			            "name": "YouPhone 3G",
			            "gsm": {
			              "network-id": {
			                "-mcc": "425",
			                "-mnc": "14"
			              },
			              "apn": {
			                "-value": "data.youphone.co.il",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "im",
			        "provider": [
			          {
			            "name": "Manx Telecom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "234",
			                "-mnc": "58"
			              },
			              "apn": {
			                "-value": "3gpronto",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Sure (Cable & Wireless)",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "234",
			                  "-mnc": "36"
			                },
			                {
			                  "-mcc": "234",
			                  "-mnc": "55"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "wap",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "WAP"
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "in",
			        "provider": [
			          {
			            "name": "AIRCEL",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "404",
			                  "-mnc": "17"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "28"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "29"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "37"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "41"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "42"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "91"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "800"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "801"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "802"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "803"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "804"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "805"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "806"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "807"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "808"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "809"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "810"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "811"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "812"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "aircelweb",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Web"
			                },
			                {
			                  "-value": "aircelgprs",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS"
			                },
			                {
			                  "-value": "aircelgprs.po",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS (Postpaid)"
			                },
			                {
			                  "-value": "aircelgprs.pr",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS (Prepaid)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Airtel",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "404",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "03"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "06"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "10"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "28"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "31"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "37"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "40"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "41"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "42"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "45"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "49"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "70"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "90"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "92"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "93"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "96"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "97"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "98"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "51"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "52"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "54"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "56"
			                }
			              ],
			              "apn": {
			                "-value": "airtelgprs.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "202.56.230.5",
			                  "202.56.240.5"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "404",
			                  "-mnc": "01"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "05"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "11"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "13"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "15"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "20"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "27"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "30"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "43"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "46"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "60"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "84"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "86"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "88"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "66"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "750"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "751"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "752"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "753"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "754"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "755"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "756"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "www",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Vodafone Connect"
			                },
			                {
			                  "-value": "portalnmms",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "mms" },
			                  "name": "Vodafone Live"
			                }
			              ]
			            }
			          },
			          {
			            "name": "BSNL/CellOne",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "404",
			                  "-mnc": "34"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "38"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "51"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "53"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "54"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "55"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "57"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "58"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "59"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "62"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "64"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "66"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "71"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "72"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "73"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "74"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "75"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "76"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "77"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "80"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "81"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "bsnlnet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "New GPRS/3G"
			                },
			                {
			                  "-value": "bsnlwap",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "New WAP"
			                },
			                {
			                  "-value": "bsnlsouth",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Old South Zone A (Karnatka, Andhra Pradesh, Chennai, Tamil Nadu, Kerala)"
			                },
			                {
			                  "-value": "gprssouth.cellone.in",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Old South Zone B (Karnatka, Andhra Pradesh, Chennai, Tamil Nadu, Kerala)"
			                },
			                {
			                  "-value": "gprsnorth.cellone.in",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Old North Zone (Haryana, Punjab, UP(East), UP(West), Himachal Pradesh, Rajasthan, Jammu & Kashmir)"
			                },
			                {
			                  "-value": "gprswest.cellone.in",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Old West Zone (Maharashtra, Gujrat, Madhya Pradesh, Chattishgarh)"
			                },
			                {
			                  "-value": "www.e.pr",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Old East Zone Prepaid (Jharkhand, Bihar, Kolkata, West Bengal, Orissa, Assam, North East, Adman Nicobar)",
			                  "dns": [
			                    "218.248.240.208",
			                    "218.248.240.135"
			                  ]
			                },
			                {
			                  "-value": "www.e.po",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Old East Zone Postpaid (Jharkhand, Bihar, Kolkata, West Bengal, Orissa, Assam, North East, Adman Nicobar)",
			                  "dns": [
			                    "218.248.240.208",
			                    "218.248.240.135"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Idea Cellular",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "404",
			                  "-mnc": "04"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "07"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "12"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "14"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "19"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "22"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "24"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "44"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "56"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "82"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "70"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "799"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "845"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "848"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "850"
			                }
			              ],
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "MTNL",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "404",
			                  "-mnc": "68"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "69"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "gprsmtnldel",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Delhi",
			                  "username": "mtnl",
			                  "password": "mtnl123"
			                },
			                {
			                  "-value": "gprsppsmum",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mumbai (Prepaid)",
			                  "username": "mtnl",
			                  "password": "mtnl123"
			                },
			                {
			                  "-value": "gprsmtnlmum",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mumbai (Postpaid / Plan 2)",
			                  "username": "mtnl",
			                  "password": "mtnl123"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Reliance",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "404",
			                  "-mnc": "09"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "36"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "52"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "83"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "85"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "05"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "10"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "13"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "smartnet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Smart Net"
			                },
			                {
			                  "-value": "smartwap",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "Smart WAP"
			                },
			                {
			                  "-value": "rcomnet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Netconnect (RCOMNET)"
			                }
			              ]
			            },
			            "cdma": {
			              "name": "Reliance Netconnect",
			              "sid": [
			                { "-value": "14655" },
			                { "-value": "14656" },
			                { "-value": "14657" },
			                { "-value": "14658" },
			                { "-value": "14659" },
			                { "-value": "14660" },
			                { "-value": "14661" },
			                { "-value": "14662" },
			                { "-value": "14663" },
			                { "-value": "14664" },
			                { "-value": "14665" },
			                { "-value": "14666" },
			                { "-value": "14667" },
			                { "-value": "14668" },
			                { "-value": "14669" },
			                { "-value": "14670" },
			                { "-value": "14671" },
			                { "-value": "14672" },
			                { "-value": "14673" },
			                { "-value": "14674" },
			                { "-value": "14675" }
			              ]
			            }
			          },
			          {
			            "name": "Spice telecom",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "404",
			                  "-mnc": "14"
			                },
			                {
			                  "-mcc": "404",
			                  "-mnc": "44"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "Simplyenjoy",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "spice",
			                  "password": "spice"
			                },
			                {
			                  "-value": "simplydownload",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "kar"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Tata Docomo",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "405",
			                  "-mnc": "025"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "026"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "027"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "029"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "030"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "031"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "032"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "034"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "035"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "036"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "037"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "038"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "039"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "041"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "042"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "043"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "044"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "045"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "046"
			                },
			                {
			                  "-mcc": "405",
			                  "-mnc": "047"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "TATA.DOCOMO.INTERNET",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet"
			                },
			                {
			                  "-value": "TATADOCOMO3G",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Tata Indicom (Plug2Surf)",
			            "cdma": {
			              "username": "internet",
			              "password": "internet"
			            }
			          },
			          {
			            "name": "Tata Indicom (Photon+)",
			            "cdma": {
			              "username": "internet",
			              "password": "internet",
			              "sid": { "-value": "14836" }
			            }
			          },
			          {
			            "name": "MTS MBlaze",
			            "cdma": {
			              "username": "internet@internet.mtsindia.in",
			              "password": "mts",
			              "sid": [
			                { "-value": "14554" },
			                { "-value": "14555" }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "iq",
			        "provider": [
			          {
			            "name": "Itisaluna",
			            "cdma": {
			              "username": "itisaluna",
			              "password": "itisaluna",
			              "sid": { "-value": "15456" }
			            }
			          },
			          {
			            "name": "Omnea Telecom",
			            "cdma": {
			              "username": "omnea",
			              "password": "omnea"
			            }
			          },
			          {
			            "name": "Kalimat Telecom",
			            "cdma": {
			              "sid": { "-value": "15470" }
			            }
			          },
			          {
			            "name": "Korek",
			            "gsm": {
			              "network-id": {
			                "-mcc": "418",
			                "-mnc": "40"
			              },
			              "apn": {
			                "-value": "net.korek.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "korek",
			                "password": "korek"
			              }
			            }
			          },
			          {
			            "name": "Asia Cell",
			            "gsm": {
			              "network-id": {
			                "-mcc": "418",
			                "-mnc": "50"
			              },
			              "apn": {
			                "-value": "net.asiacell.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ir",
			        "provider": [
			          {
			            "name": "همراه اول",
			            "gsm": {
			              "network-id": {
			                "-mcc": "432",
			                "-mnc": "11"
			              },
			              "apn": {
			                "-value": "mcinet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "ایرانسل",
			            "gsm": {
			              "network-id": {
			                "-mcc": "432",
			                "-mnc": "35"
			              },
			              "apn": {
			                "-value": "mtnirancell",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "is",
			        "provider": [
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "274",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "274",
			                  "-mnc": "03"
			                }
			              ],
			              "apn": {
			                "-value": "vmc.gprs.is",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "213.176.128.51",
			                  "213.176.128.50"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Nova",
			            "gsm": {
			              "network-id": {
			                "-mcc": "274",
			                "-mnc": "11"
			              },
			              "apn": {
			                "-value": "internet.nova.is",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "192.168.190.54",
			                  "192.168.190.55"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Síminn",
			            "gsm": {
			              "network-id": {
			                "-mcc": "274",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "wap.simi.is",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "194.105.224.1",
			                  "212.30.200.200"
			                ]
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "it",
			        "provider": [
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "222",
			                "-mnc": "10"
			              },
			              "apn": [
			                {
			                  "-value": "mobile.vodafone.it",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Internet"
			                },
			                {
			                  "-value": "web.omnitel.it",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet Facile (old)",
			                  "dns": [
			                    "83.224.70.62",
			                    "83.224.70.78"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "TIM",
			            "gsm": {
			              "network-id": {
			                "-mcc": "222",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "ibox.tim.it",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Maxxi Alice/Internet",
			                  "dns": [
			                    "217.200.200.42",
			                    "213.230.129.10"
			                  ]
			                },
			                {
			                  "-value": "wap.tim.it",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "WAP",
			                  "username": "WAPTIM",
			                  "dns": [
			                    "213.230.155.94",
			                    "213.230.130.222"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Wind",
			            "gsm": {
			              "network-id": {
			                "-mcc": "222",
			                "-mnc": "88"
			              },
			              "apn": [
			                {
			                  "-value": "internet.wind",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Non-business",
			                  "username": "Wind",
			                  "password": "Wind",
			                  "dns": [
			                    "193.70.152.25",
			                    "193.70.192.25"
			                  ]
			                },
			                {
			                  "-value": "internet.wind.biz",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Business",
			                  "username": "Wind",
			                  "password": "Wind",
			                  "dns": [
			                    "193.70.152.25",
			                    "193.70.192.25"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "-primary": "true",
			            "name": "3",
			            "gsm": {
			              "network-id": {
			                "-mcc": "222",
			                "-mnc": "99"
			              },
			              "apn": [
			                {
			                  "-value": "tre.it",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Ricaricabile",
			                  "dns": [
			                    "62.13.169.92",
			                    "62.13.169.93"
			                  ]
			                },
			                {
			                  "-value": "datacard.tre.it",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Abbonamento"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Fastweb",
			            "gsm": {
			              "network-id": {
			                "-mcc": "222",
			                "-mnc": "99"
			              },
			              "apn": [
			                {
			                  "-value": "apn.fastweb.it",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Voce/dati"
			                },
			                {
			                  "-value": "datacard.fastweb.it",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Solo dati",
			                  "dns": [
			                    "213.140.2.43",
			                    "213.140.2.49"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "PosteMobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "222",
			                "-mnc": "10"
			              },
			              "apn": {
			                "-value": "internet.postemobile.it",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "CoopVoce",
			            "gsm": {
			              "network-id": {
			                "-mcc": "222",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "web.coopvoce.it",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Internet Mobile"
			              }
			            }
			          },
			          {
			            "name": "Bip",
			            "gsm": {
			              "network-id": {
			                "-mcc": "222",
			                "-mnc": "99"
			              },
			              "apn": {
			                "-value": "internet.vistream.it",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "name": "Megabip Internet"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "je",
			        "provider": [
			          {
			            "name": "Airtel-Vodaphone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "234",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "airtel-ci-gprs.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Sure (Cable & Wireless)",
			            "gsm": {
			              "network-id": {
			                "-mcc": "234",
			                "-mnc": "55"
			              },
			              "apn": [
			                {
			                  "-value": "wap",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "WAP"
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Jersey Telecom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "234",
			                "-mnc": "50"
			              },
			              "apn": {
			                "-value": "pepper",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "abc",
			                "password": "abc",
			                "dns": [
			                  "212.9.0.135",
			                  "212.9.0.136"
			                ]
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "jm",
			        "provider": [
			          {
			            "name": "Cable & Wireless",
			            "gsm": {
			              "network-id": {
			                "-mcc": "338",
			                "-mnc": "020"
			              },
			              "apn": {
			                "-value": "wap",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Digicel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "338",
			                "-mnc": "050"
			              },
			              "apn": {
			                "-value": "web.digiceljamaica.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "wapuser",
			                "password": "wap03jam",
			                "dns": [
			                  "208.131.176.126",
			                  "200.10.152.232"
			                ]
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "jo",
			        "provider": [
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "416",
			                "-mnc": "77"
			              },
			              "apn": {
			                "-value": "net.orange.jo",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Mobile Broadband",
			                "username": "net",
			                "password": "net"
			              }
			            }
			          },
			          {
			            "name": "Zain",
			            "gsm": {
			              "network-id": {
			                "-mcc": "416",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "zain",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Mobile Broadband",
			                "username": "Zain",
			                "password": "Zain"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "jp",
			        "provider": [
			          {
			            "name": "Softbank Mobile",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "440",
			                  "-mnc": "04"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "06"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "20"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "40"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "41"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "42"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "43"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "44"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "45"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "46"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "47"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "48"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "90"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "92"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "93"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "94"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "95"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "96"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "97"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "98"
			                }
			              ],
			              "apn": {
			                "-value": "softbank",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "ai@softbank",
			                "password": "softbank"
			              }
			            }
			          },
			          {
			            "name": "b-mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "440",
			                "-mnc": "10"
			              },
			              "apn": {
			                "-value": "dm.jplat.net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "u300",
			                "username": "bmobile@u300",
			                "password": "bmobile"
			              }
			            }
			          },
			          {
			            "name": "e-mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "440",
			                "-mnc": "00"
			              },
			              "apn": {
			                "-value": "emb.ne.jp",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "em",
			                "password": "em"
			              }
			            }
			          },
			          {
			            "name": "NTTdocomo",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "440",
			                  "-mnc": "01"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "03"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "09"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "10"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "11"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "12"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "13"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "14"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "15"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "16"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "17"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "18"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "19"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "21"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "22"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "23"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "24"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "25"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "26"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "27"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "28"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "29"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "30"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "31"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "32"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "33"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "34"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "35"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "36"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "37"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "38"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "39"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "49"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "58"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "60"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "61"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "62"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "63"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "64"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "65"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "66"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "67"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "68"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "69"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "87"
			                },
			                {
			                  "-mcc": "440",
			                  "-mnc": "99"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "mopera.ne.jp",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "mopera"
			                },
			                {
			                  "-value": "mopera.net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "mopera U"
			                }
			              ]
			            }
			          },
			          {
			            "name": "au(KDDI)",
			            "cdma": {
			              "username": "au@au-win.ne.jp",
			              "password": "au",
			              "dns": [
			                "210.196.3.183",
			                "210.141.112.163"
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ke",
			        "provider": [
			          {
			            "name": "Airtel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "639",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "ke.celtel.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Safaricom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "639",
			                "-mnc": "02"
			              },
			              "balance-check": { "ussd": "*144#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*544*CODE#"
			                }
			              },
			              "apn": [
			                {
			                  "-value": "safaricom",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Safaricom (Prepaid)",
			                  "username": "saf",
			                  "password": "data"
			                },
			                {
			                  "-value": "safaricom",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "web",
			                  "password": "web"
			                }
			              ]
			            }
			          },
			          {
			            "name": "yu (Econet)",
			            "gsm": {
			              "network-id": {
			                "-mcc": "639",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "internet.econet.co.ke",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "639",
			                "-mnc": "07"
			              },
			              "apn": {
			                "-value": "bew.orange.co.ke",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            },
			            "cdma": { "name": "Orange Fixed Plus" }
			          }
			        ]
			      },
			      {
			        "-code": "kg",
			        "provider": [
			          {
			            "name": "Beeline",
			            "gsm": {
			              "network-id": {
			                "-mcc": "437",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet.beeline.kg",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "MegaCom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "437",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "O!",
			            "gsm": {
			              "network-id": {
			                "-mcc": "437",
			                "-mnc": "09"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "FONEX",
			            "cdma": {
			              "username": "cdma",
			              "password": "cdma"
			            }
			          },
			          {
			            "name": [
			              "nexi (mir+kg)",
			              {
			                "-xml:lang": "ru",
			                "#text": "Зона Мир+КГ"
			              }
			            ],
			            "cdma": {
			              "username": "555@mir",
			              "password": "555"
			            }
			          },
			          {
			            "name": [
			              "nexi (kg)",
			              {
			                "-xml:lang": "ru",
			                "#text": "Зона КГ"
			              }
			            ],
			            "cdma": {
			              "username": "999@kg",
			              "password": "999"
			            }
			          }
			        ]
			      },
			      {
			        "-code": "kh",
			        "provider": [
			          {
			            "name": "Cellcard",
			            "gsm": {
			              "network-id": {
			                "-mcc": "456",
			                "-mnc": "01"
			              },
			              "balance-check": { "ussd": "#124#" },
			              "apn": {
			                "-value": "cellcard",
			                "usage": { "-type": "internet" },
			                "username": "mobitel",
			                "password": "mobitel"
			              }
			            }
			          },
			          {
			            "name": "Hello",
			            "gsm": {
			              "network-id": {
			                "-mcc": "456",
			                "-mnc": "02"
			              },
			              "balance-check": { "ussd": "*100#" },
			              "apn": {
			                "-value": "hellowww",
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "qb",
			            "gsm": {
			              "network-id": {
			                "-mcc": "456",
			                "-mnc": "04"
			              },
			              "balance-check": { "ussd": "#132#" },
			              "apn": {
			                "-value": "WAP",
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Smart Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "456",
			                "-mnc": "06"
			              },
			              "balance-check": { "ussd": "*888#" },
			              "apn": {
			                "-value": "smart",
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Metfone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "456",
			                "-mnc": "08"
			              },
			              "balance-check": { "ussd": "*097#" },
			              "apn": {
			                "-value": "metfone",
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Beeline",
			            "gsm": {
			              "network-id": {
			                "-mcc": "456",
			                "-mnc": "09"
			              },
			              "balance-check": { "ussd": "*102#" },
			              "apn": {
			                "-value": "gprs.beeline.com.kh",
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          { "name": "Excell" },
			          {
			            "name": "Mfone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "456",
			                "-mnc": "18"
			              },
			              "balance-check": { "ussd": "*222#" },
			              "apn": {
			                "-value": "Mfone",
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "kr",
			        "provider": [
			          {
			            "name": "KTF",
			            "gsm": {
			              "network-id": {
			                "-mcc": "450",
			                "-mnc": "08"
			              },
			              "apn": {
			                "-value": "hsdpa-internet.ktfwing.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            },
			            "cdma": {
			              "username": "ktf",
			              "password": "ktf"
			            }
			          },
			          {
			            "name": "LGTelecom",
			            "cdma": {
			              
			            }
			          },
			          {
			            "name": "SKTelecom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "450",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "nate.sktelecom.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            },
			            "cdma": { "username": "sktelecom" }
			          }
			        ]
			      },
			      {
			        "-code": "kw",
			        "provider": [
			          {
			            "name": "Zain",
			            "gsm": {
			              "network-id": {
			                "-mcc": "419",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "pps",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Personal",
			                  "username": "pps",
			                  "password": "pps"
			                },
			                {
			                  "-value": "apn01",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Corporate"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Wataniya",
			            "gsm": {
			              "network-id": {
			                "-mcc": "419",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "action.wataniya.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Viva",
			            "gsm": {
			              "network-id": {
			                "-mcc": "419",
			                "-mnc": "04"
			              },
			              "apn": {
			                "-value": "viva",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "kz",
			        "provider": [
			          {
			            "name": "Beeline",
			            "gsm": {
			              "network-id": {
			                "-mcc": "401",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet.beeline.kz",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "@internet.beeline",
			                "dns": [
			                  "212.19.149.53",
			                  "194.226.128.1"
			                ]
			              }
			            }
			          },
			          {
			            "name": "K'CELL",
			            "gsm": {
			              "network-id": {
			                "-mcc": "401",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Activ",
			            "gsm": {
			              "network-id": {
			                "-mcc": "401",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Tele2",
			            "gsm": {
			              "network-id": {
			                "-mcc": "401",
			                "-mnc": "77"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Pathword",
			            "cdma": {
			              "username": "Pathword",
			              "password": "Pathword"
			            }
			          },
			          {
			            "name": "Dalacom",
			            "cdma": {
			              "username": "Dalacom",
			              "password": "Dalacom"
			            }
			          }
			        ]
			      },
			      {
			        "-code": "la",
			        "provider": [
			          {
			            "name": "ETL",
			            "gsm": {
			              "network-id": {
			                "-mcc": "457",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "etlnet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": "192.168.4.130"
			              }
			            }
			          },
			          {
			            "name": "Lao Telecom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "457",
			                "-mnc": "01"
			              },
			              "balance-check": { "ussd": "*122#" },
			              "apn": {
			                "-value": "ltcnet",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Unitel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "457",
			                "-mnc": "03"
			              },
			              "apn": [
			                {
			                  "-value": "startelecom",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Unitel (2G)"
			                },
			                {
			                  "-value": "unitel3g",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Unitel (3G)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Beeline (Tigo)",
			            "gsm": {
			              "network-id": {
			                "-mcc": "457",
			                "-mnc": "08"
			              },
			              "apn": {
			                "-value": "beelinenet",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "lb",
			        "provider": {
			          "name": "MTC Touch",
			          "gsm": {
			            "network-id": {
			              "-mcc": "415",
			              "-mnc": "03"
			            },
			            "apn": {
			              "-value": "gprs.mtctouch.com.lb",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" }
			            }
			          }
			        }
			      },
			      {
			        "-code": "lc",
			        "provider": {
			          "name": "Cable & Wireless",
			          "gsm": {
			            "network-id": {
			              "-mcc": "358",
			              "-mnc": "110"
			            },
			            "apn": {
			              "-value": "internet",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" }
			            }
			          }
			        }
			      },
			      {
			        "-code": "lk",
			        "provider": [
			          {
			            "name": "Airtel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "413",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "www.wap.airtel.lk",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Dialog GSM",
			            "gsm": {
			              "network-id": {
			                "-mcc": "413",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "www.dialogsl.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Postpaid"
			                },
			                {
			                  "-value": "ppinternet",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prepaid"
			                },
			                {
			                  "-value": "dialogbb",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Unlimited Broadband"
			                },
			                {
			                  "-value": "kitbb.com",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prepaid (Kitbb)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Hutch",
			            "gsm": {
			              "network-id": {
			                "-mcc": "413",
			                "-mnc": "08"
			              },
			              "apn": {
			                "-value": "htwap",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Mobitel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "413",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "isp",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Tigo",
			            "gsm": {
			              "network-id": {
			                "-mcc": "413",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "wap",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ls",
			        "provider": {
			          "name": "Vodacom Lesotho",
			          "gsm": {
			            "network-id": {
			              "-mcc": "651",
			              "-mnc": "01"
			            },
			            "apn": {
			              "-value": "internet",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" }
			            }
			          }
			        }
			      },
			      {
			        "-code": "lt",
			        "provider": [
			          {
			            "name": "Bite",
			            "gsm": {
			              "network-id": {
			                "-mcc": "246",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "banga",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "213.226.131.131",
			                  "193.219.88.36"
			                ]
			              }
			            }
			          },
			          {
			            "name": "TELE2 GPRS",
			            "gsm": {
			              "network-id": {
			                "-mcc": "246",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "internet.tele2.lt",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Omnitel (contract)",
			            "gsm": {
			              "network-id": {
			                "-mcc": "246",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "gprs.omnitel.net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contract",
			                  "dns": [
			                    "194.176.32.129",
			                    "195.22.175.1"
			                  ]
			                },
			                {
			                  "-value": "gprs.startas.lt",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "No contract",
			                  "username": "omni",
			                  "password": "omni",
			                  "dns": [
			                    "194.176.32.129",
			                    "195.22.175.1"
			                  ]
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "lu",
			        "provider": [
			          {
			            "name": "LUXGSM",
			            "gsm": {
			              "network-id": {
			                "-mcc": "270",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "web.pt.lu",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "194.154.192.101",
			                  "194.154.192.102"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Tango",
			            "gsm": {
			              "network-id": {
			                "-mcc": "270",
			                "-mnc": "77"
			              },
			              "apn": [
			                {
			                  "-value": "hspa",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "hspa",
			                  "username": "tango",
			                  "password": "tango"
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "internet",
			                  "username": "tango",
			                  "password": "tango",
			                  "dns": [
			                    "212.66.70.3",
			                    "212.66.75.7"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "270",
			                "-mnc": "99"
			              },
			              "apn": {
			                "-value": "orange.lu",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "85.94.224.1",
			                  "85.94.224.2"
			                ]
			              }
			            }
			          },
			          {
			            "name": "VOXmobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "270",
			                "-mnc": "99"
			              },
			              "apn": {
			                "-value": "vox.lu",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "lv",
			        "provider": [
			          {
			            "name": "LMT",
			            "gsm": {
			              "network-id": {
			                "-mcc": "247",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "internet.lmt.lv",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "dns": [
			                    "212.93.96.2",
			                    "212.93.96.4"
			                  ]
			                },
			                {
			                  "-value": "open.lmt.lv",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "O!Karte internet"
			                },
			                {
			                  "-value": "okarte.lmt.lv",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "O!Karte"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Tele2",
			            "gsm": {
			              "network-id": {
			                "-mcc": "247",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "internet.tele2.lv",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Regular",
			                  "username": "gprs",
			                  "password": "internet"
			                },
			                {
			                  "-value": "mobileinternet.tele2.lv",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Internet",
			                  "username": "wap",
			                  "password": "wap"
			                },
			                {
			                  "-value": "data.tele2.lv",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Zelta Zivtina",
			                  "username": "wap",
			                  "password": "wap"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Bite",
			            "gsm": {
			              "network-id": {
			                "-mcc": "247",
			                "-mnc": "05"
			              },
			              "apn": [
			                {
			                  "-value": "wap",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Bite plus"
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prepaid/Contract"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ma",
			        "provider": [
			          {
			            "name": "Ittissalat Al Maghrib (IAM)",
			            "gsm": {
			              "network-id": {
			                "-mcc": "604",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "www.iamgprs1.ma",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Abonnement"
			                },
			                {
			                  "-value": "www.iamgprs2.ma",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Pre-payé"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Medi Telecom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "604",
			                "-mnc": "00"
			              },
			              "apn": [
			                {
			                  "-value": "internet1.meditel.ma",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Abonnement",
			                  "username": "MEDINET",
			                  "password": "MEDINET"
			                },
			                {
			                  "-value": "internet2.meditel.ma",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Pre-payé",
			                  "username": "MEDINET",
			                  "password": "MEDINET"
			                }
			              ]
			            }
			          },
			          {
			            "name": "WANA",
			            "gsm": {
			              "network-id": {
			                "-mcc": "604",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "www.wana.ma",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "INWI"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "md",
			        "provider": [
			          {
			            "name": "Moldcell",
			            "gsm": {
			              "network-id": {
			                "-mcc": "259",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Internet",
			                "username": "gprs",
			                "password": "gprs"
			              }
			            }
			          },
			          {
			            "name": "Eventis",
			            "gsm": {
			              "network-id": {
			                "-mcc": "259",
			                "-mnc": "04"
			              },
			              "apn": {
			                "-value": "internet.md",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Internet"
			              }
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "259",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Internet"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "me",
			        "provider": [
			          {
			            "name": "ProMonte GSM",
			            "gsm": {
			              "network-id": {
			                "-mcc": "297",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "gprs.promonte.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "T-Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "297",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "tmcg-data",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Broadband",
			                  "username": "38267",
			                  "password": "38267"
			                },
			                {
			                  "-value": "tmcg-nw",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS",
			                  "username": "38267",
			                  "password": "38267"
			                },
			                {
			                  "-value": "internet-postpaid",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Postpaid (old)"
			                },
			                {
			                  "-value": "internet-prepaid",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prepaid (old)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "m:tel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "297",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "gprsinternet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "mg",
			        "provider": [
			          {
			            "name": "Airtel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "646",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "646",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "orangeworld",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "username": "world",
			                "password": "orange"
			              }
			            }
			          },
			          {
			            "name": "Telma",
			            "gsm": {
			              "network-id": {
			                "-mcc": "646",
			                "-mnc": "04"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ml",
			        "provider": [
			          {
			            "name": "Malitel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "610",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "web.malitel3.ml",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "name": "3G+",
			                "username": "internet",
			                "password": "internet"
			              }
			            },
			            "cdma": {
			              "name": "Internet Mobile+",
			              "username": "card",
			              "password": "card"
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "610",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "iew",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet Every Where",
			                  "username": "iew",
			                  "password": "iew"
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet",
			                  "username": "internet",
			                  "password": "internet"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "mm",
			        "provider": {
			          "name": "MPT",
			          "gsm": {
			            "network-id": {
			              "-mcc": "414",
			              "-mnc": "01"
			            },
			            "apn": {
			              "-value": "mptnet",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" },
			              "name": "MPTNET",
			              "username": "mptnet",
			              "password": "mptnet"
			            }
			          }
			        }
			      },
			      {
			        "-code": "mn",
			        "provider": {
			          "name": "MobiCom",
			          "gsm": {
			            "network-id": {
			              "-mcc": "428",
			              "-mnc": "99"
			            },
			            "apn": {
			              "-value": "internet",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" }
			            }
			          }
			        }
			      },
			      {
			        "-code": "mo",
			        "provider": [
			          {
			            "name": "3 / Hutchison",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "455",
			                  "-mnc": "03"
			                },
			                {
			                  "-mcc": "455",
			                  "-mnc": "05"
			                }
			              ],
			              "apn": {
			                "-value": "web.hutchisonmacau.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "hutchison",
			                "password": "1234"
			              }
			            }
			          },
			          {
			            "name": "CTM",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "455",
			                  "-mnc": "01"
			                },
			                {
			                  "-mcc": "455",
			                  "-mnc": "04"
			                }
			              ],
			              "apn": {
			                "-value": "ctm-mobile",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          { "name": "China Telecom" }
			        ]
			      },
			      {
			        "-code": "mk",
			        "provider": [
			          {
			            "name": "T-Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "294",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "internet",
			                "password": "internet"
			              }
			            }
			          },
			          {
			            "name": "One",
			            "gsm": {
			              "network-id": {
			                "-mcc": "294",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "datacard",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Internet"
			              }
			            }
			          },
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "294",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "vipoperator",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "vipoperator",
			                "password": "vipoperator"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "mt",
			        "provider": [
			          {
			            "name": "GO Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "278",
			                "-mnc": "21"
			              },
			              "apn": [
			                {
			                  "-value": "gosurfing",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Postpaid"
			                },
			                {
			                  "-value": "rtgsurfing",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prepaid"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "278",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "Internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "internet",
			                "password": "internet",
			                "dns": [
			                  "80.85.96.131",
			                  "80.85.97.70"
			                ]
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "mu",
			        "provider": {
			          "name": "Emtel",
			          "gsm": {
			            "network-id": {
			              "-mcc": "617",
			              "-mnc": "10"
			            },
			            "apn": {
			              "-value": "WEB",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" }
			            }
			          }
			        }
			      },
			      {
			        "-code": "mv",
			        "provider": [
			          {
			            "name": "Dhiraagu",
			            "gsm": {
			              "network-id": {
			                "-mcc": "472",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet.dhimobile",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Wataniya",
			            "gsm": {
			              "network-id": {
			                "-mcc": "472",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "WataniyaNet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "mw",
			        "provider": {
			          "name": "TNM",
			          "gsm": {
			            "network-id": {
			              "-mcc": "650",
			              "-mnc": "01"
			            },
			            "apn": {
			              "-value": "Internet",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" }
			            }
			          }
			        }
			      },
			      {
			        "-code": "mx",
			        "provider": [
			          {
			            "name": "Telcel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "334",
			                "-mnc": "02"
			              },
			              "voicemail": "*86",
			              "balance-check": { "dtmf": "*333" },
			              "apn": {
			                "-value": "internet.itelcel.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "webgprs",
			                "password": "webgprs2002"
			              }
			            }
			          },
			          {
			            "name": "Movistar",
			            "gsm": {
			              "network-id": {
			                "-mcc": "334",
			                "-mnc": "03"
			              },
			              "voicemail": "*86",
			              "balance-check": { "dtmf": "*133#" },
			              "apn": {
			                "-value": "internet.movistar.mx",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "movistar",
			                "password": "movistar"
			              }
			            }
			          },
			          { "name": "Iusacell" }
			        ]
			      },
			      {
			        "-code": "my",
			        "provider": [
			          {
			            "name": "DiGi",
			            "gsm": {
			              "network-id": {
			                "-mcc": "502",
			                "-mnc": "16"
			              },
			              "apn": [
			                {
			                  "-value": "diginet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Internet",
			                  "dns": [
			                    "203.92.128.131",
			                    "203.92.128.132"
			                  ]
			                },
			                {
			                  "-value": "3gdgnet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Broadband"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Maxis",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "502",
			                  "-mnc": "12"
			                },
			                {
			                  "-mcc": "502",
			                  "-mnc": "17"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "maxisbb",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Broadband",
			                  "username": "maxis",
			                  "password": "wap"
			                },
			                {
			                  "-value": "net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS",
			                  "username": "maxis",
			                  "password": "net"
			                },
			                {
			                  "-value": "unet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "3G (handsets)",
			                  "username": "maxis",
			                  "password": "wap",
			                  "dns": [
			                    "10.213.17.1",
			                    "10.213.17.2"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Celcom",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "502",
			                  "-mnc": "13"
			                },
			                {
			                  "-mcc": "502",
			                  "-mnc": "19"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "celcom.net.my",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS"
			                },
			                {
			                  "-value": "celcom3g",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Celcom 3G"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "mz",
			        "provider": [
			          {
			            "name": "MCel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "643",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "isp.mcel.mz",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "guest",
			                "password": "guest",
			                "dns": [
			                  "212.96.24.2",
			                  "212.96.24.1"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Vodacom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "643",
			                "-mnc": "04"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Contract / Prepaid"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "na",
			        "provider": [
			          {
			            "name": "MTC",
			            "gsm": {
			              "network-id": {
			                "-mcc": "649",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "ppsinternet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Tango",
			                  "username": "ppsuser",
			                  "password": "ppsuser"
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contract"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Telecom",
			            "cdma": {
			              "name": "switch",
			              "password": "telecom"
			            }
			          },
			          {
			            "name": "Leo",
			            "gsm": {
			              "network-id": {
			                "-mcc": "649",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Leo"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ng",
			        "provider": [
			          {
			            "name": "Airtel NG",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "621",
			                  "-mnc": "20"
			                },
			                {
			                  "-mcc": "621",
			                  "-mnc": "80"
			                }
			              ],
			              "balance-check": { "ussd": "*123#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*126*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "internet.ng.airtel.com.ng",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "username": "internet",
			                "password": "internet"
			              }
			            }
			          },
			          {
			            "name": "MTN",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "621",
			                  "-mnc": "30"
			                },
			                {
			                  "-mcc": "621",
			                  "-mnc": "60"
			                }
			              ],
			              "balance-check": { "ussd": "*556#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*555*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "web.gprs.mtnnigeria.net",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "username": "web",
			                "password": "web"
			              }
			            }
			          },
			          {
			            "name": "Glo Mobile",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "621",
			                  "-mnc": "50"
			                },
			                {
			                  "-mcc": "621",
			                  "-mnc": "70"
			                }
			              ],
			              "balance-check": {
			                "ussd": "#124#",
			                "ussd-response": "4"
			              },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*123*CODE#"
			                }
			              },
			              "apn": [
			                {
			                  "-value": "glosecure",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Pay as You Go",
			                  "username": "gprs",
			                  "password": "gprs"
			                },
			                {
			                  "-value": "gloflat",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Glo 3G Packs",
			                  "username": "flat",
			                  "password": "flat"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Etisalat",
			            "gsm": {
			              "network-id": {
			                "-mcc": "621",
			                "-mnc": "90"
			              },
			              "balance-check": { "ussd": "*232#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*222*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "etisalat",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Etisalat Internet"
			              }
			            }
			          },
			          {
			            "name": "Starcomms",
			            "cdma": {
			              "username": "your_phone_number@starcomms.com",
			              "password": "your_phone_number",
			              "sid": { "-value": "2" }
			            }
			          },
			          {
			            "name": "Multilinks",
			            "cdma": {
			              
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ni",
			        "provider": [
			          {
			            "name": "Claro",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "710",
			                  "-mnc": "21"
			                },
			                {
			                  "-mcc": "710",
			                  "-mnc": "73"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "wap.emovil",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "WAP",
			                  "username": "wapemovil",
			                  "password": "wapemovil"
			                },
			                {
			                  "-value": "web.emovil",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Web",
			                  "username": "webemovil",
			                  "password": "webemovil"
			                },
			                {
			                  "-value": "internet.ideasalo.ni",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Web (Alo pcs)",
			                  "username": "internet",
			                  "password": "internet"
			                },
			                {
			                  "-value": "wap.ideasalo.ni",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "WAP (Alo pcs)",
			                  "username": "wap",
			                  "password": "wap"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Movistar",
			            "gsm": {
			              "network-id": {
			                "-mcc": "710",
			                "-mnc": "30"
			              },
			              "apn": {
			                "-value": "internet.movistar.ni",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "internet",
			                "password": "internet"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "nl",
			        "provider": [
			          {
			            "name": "Hi",
			            "gsm": {
			              "network-id": {
			                "-mcc": "204",
			                "-mnc": "08"
			              },
			              "apn": {
			                "-value": "portalmmm.nl",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Lebara",
			            "gsm": {
			              "network-id": {
			                "-mcc": "204",
			                "-mnc": "12"
			              },
			              "apn": {
			                "-value": "multimedia.lebara.nl",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Lycamobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "204",
			                "-mnc": "09"
			              },
			              "apn": {
			                "-value": "data.lycamobile.nl",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "username": "lmnl",
			                "password": "plus"
			              }
			            }
			          },
			          {
			            "name": "KPN NL",
			            "gsm": {
			              "network-id": {
			                "-mcc": "204",
			                "-mnc": "08"
			              },
			              "apn": [
			                {
			                  "-value": "prepaidinternet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" }
			                },
			                {
			                  "-value": "fastinternet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" }
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "KPN",
			                  "password": "gprs",
			                  "dns": [
			                    "62.133.126.28",
			                    "62.133.126.29"
			                  ]
			                },
			                {
			                  "-value": "noapn",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "dns": [
			                    "62.133.126.28",
			                    "62.133.126.29"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "MEDIONmobile",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "204",
			                  "-mnc": "08"
			                },
			                {
			                  "-mcc": "204",
			                  "-mnc": "10"
			                }
			              ],
			              "apn": {
			                "-value": "portalmmm.nl",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "name": "Aldi Talk Mobiel Prepaid Internet"
			              }
			            }
			          },
			          {
			            "name": "Telfort",
			            "gsm": {
			              "network-id": {
			                "-mcc": "204",
			                "-mnc": "12"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "telfortnl"
			              }
			            }
			          },
			          {
			            "-primary": "true",
			            "name": "T-Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "204",
			                "-mnc": "16"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "193.78.240.12",
			                  "193.79.242.39"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Ben",
			            "gsm": {
			              "network-id": {
			                "-mcc": "204",
			                "-mnc": "16"
			              },
			              "apn": {
			                "-value": "internet.ben",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "193.78.240.12",
			                  "193.79.242.39"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "204",
			                "-mnc": "20"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "orange",
			                "password": "orange"
			              }
			            }
			          },
			          {
			            "name": "Tele2",
			            "gsm": {
			              "network-id": {
			                "-mcc": "204",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "data.tele2.nl",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "XS4ALL Mobiel Internet",
			            "gsm": {
			              "apn": {
			                "-value": "umts.xs4all.nl",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "xs4all",
			                "password": "xs4all"
			              }
			            }
			          },
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "204",
			                "-mnc": "04"
			              },
			              "msisdn-query": { "ussd": "*#100#" },
			              "apn": [
			                {
			                  "-value": "live.vodafone.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Non-business",
			                  "username": "vodafone",
			                  "password": "vodafone",
			                  "dns": [
			                    "62.140.138.237",
			                    "62.140.140.250"
			                  ]
			                },
			                {
			                  "-value": "office.vodafone.nl",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Business",
			                  "username": "vodafone",
			                  "password": "vodafone"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Galaxy",
			            "gsm": {
			              "network-id": {
			                "-mcc": "204",
			                "-mnc": "08"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "no",
			        "provider": [
			          {
			            "name": "Netcom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "242",
			                "-mnc": "02"
			              },
			              "balance-check": { "ussd": "*150#" },
			              "apn": {
			                "-value": "internet.netcom.no",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "netcom",
			                "password": "netcom",
			                "dns": [
			                  "212.169.123.67",
			                  "212.45.188.254"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Chess",
			            "gsm": {
			              "network-id": {
			                "-mcc": "242",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "netcom",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "chess",
			                "password": "chess"
			              }
			            }
			          },
			          {
			            "name": "ice.net (Nordisk Mobiltelefon)",
			            "cdma": {
			              "username": "cdma",
			              "password": "cdma"
			            }
			          },
			          {
			            "name": "Telenor",
			            "gsm": {
			              "network-id": {
			                "-mcc": "242",
			                "-mnc": "01"
			              },
			              "voicemail": "91500002",
			              "balance-check": {
			                "sms": {
			                  "-text": "saldo",
			                  "#text": "2525"
			                }
			              },
			              "apn": {
			                "-value": "telenor",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "212.17.131.3",
			                  "148.122.161.2"
			                ]
			              }
			            }
			          },
			          {
			            "name": "TDC",
			            "gsm": {
			              "network-id": {
			                "-mcc": "242",
			                "-mnc": "08"
			              },
			              "apn": {
			                "-value": "internet.no",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "80.232.41.10",
			                  "80.232.41.20"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Network Norway",
			            "gsm": {
			              "network-id": {
			                "-mcc": "242",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "internet",
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "OneCall",
			            "gsm": {
			              "network-id": {
			                "-mcc": "242",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "internet",
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "MyCall",
			            "gsm": {
			              "network-id": {
			                "-mcc": "242",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "internet",
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Altibox",
			            "gsm": {
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Telipol",
			            "gsm": {
			              "network-id": {
			                "-mcc": "242",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Ventelo",
			            "gsm": {
			              "network-id": {
			                "-mcc": "242",
			                "-mnc": "07"
			              },
			              "apn": {
			                "-value": "internet.ventelo.no",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Ludo Mobil",
			            "gsm": {
			              "network-id": {
			                "-mcc": "242",
			                "-mnc": "07"
			              },
			              "apn": {
			                "-value": "internet.ventelo.no",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Tele2",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "242",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "242",
			                  "-mnc": "04"
			                }
			              ],
			              "voicemail": "47230000",
			              "balance-check": {
			                "ussd": "*111#",
			                "dtmf": "47300000"
			              },
			              "apn": [
			                {
			                  "-value": "internet.tele2.no",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "Mobilt internet"
			                },
			                {
			                  "-value": "mobileinternet.tele2.no",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobilt bredbånd"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "np",
			        "provider": [
			          {
			            "name": "Nepal Telecom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "429",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "ntnet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Mero Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "429",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "mero",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "nz",
			        "provider": [
			          {
			            "name": "Telecom New Zealand",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "530",
			                  "-mnc": "00"
			                },
			                {
			                  "-mcc": "530",
			                  "-mnc": "05"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "wap.telecom.co.nz",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "XT mobile (WAP)"
			                },
			                {
			                  "-value": "internet.telecom.co.nz",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "XT mobile (Internet with Firewall)",
			                  "dns": [
			                    "202.27.156.72",
			                    "202.27.158.40"
			                  ]
			                },
			                {
			                  "-value": "direct.telecom.co.nz",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "XT mobile (Direct Internet)",
			                  "dns": [
			                    "202.27.156.72",
			                    "202.27.158.40"
			                  ]
			                },
			                {
			                  "-value": "oa.telecom.co.nz",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "XT mobile (One Office/Remote Office)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "530",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "live.vodafone.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "WAP",
			                  "dns": [
			                    "202.73.206.16",
			                    "202.73.198.16"
			                  ]
			                },
			                {
			                  "-value": "www.vodafone.net.nz",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contract / Prepaid (Restricted)"
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Unrestricted (public)",
			                  "dns": [
			                    "202.73.206.16",
			                    "202.73.198.16"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "2-Degrees",
			            "gsm": {
			              "network-id": {
			                "-mcc": "530",
			                "-mnc": "24"
			              },
			              "apn": [
			                {
			                  "-value": "mms",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "mms" },
			                  "name": "MMS"
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Broadband",
			                  "dns": [
			                    "118.148.1.10",
			                    "118.148.1.20"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "TelstraClear",
			            "gsm": {
			              "apn": {
			                "-value": "www.telstraclear.net.nz",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "name": "Broadband"
			              }
			            }
			          },
			          {
			            "name": "Orcon",
			            "gsm": {
			              "apn": {
			                "-value": "www.orcon.net.nz",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "name": "Broadband"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "om",
			        "provider": [
			          {
			            "name": "Oman Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "422",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "taif",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Broadband",
			                  "username": "taif",
			                  "password": "taif"
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet (old)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Nawras",
			            "gsm": {
			              "network-id": {
			                "-mcc": "422",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "isp.nawras.com.om",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "pa",
			        "provider": [
			          {
			            "name": "Cable and Wireless",
			            "gsm": {
			              "network-id": {
			                "-mcc": "714",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "apn01.cwpanama.com.pa",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Movistar",
			            "gsm": {
			              "network-id": {
			                "-mcc": "714",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "internet.movistar.pa",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "movistarpa",
			                "password": "movistarpa",
			                "dns": [
			                  "200.39.10.1",
			                  "200.36.160.237"
			                ]
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "pe",
			        "provider": [
			          {
			            "name": "Claro",
			            "gsm": {
			              "network-id": {
			                "-mcc": "716",
			                "-mnc": "10"
			              },
			              "apn": [
			                {
			                  "-value": "tim.pe",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "tim",
			                  "password": "tulibertad"
			                },
			                {
			                  "-value": "ba.amx",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet Móvil Prepago",
			                  "username": "amx",
			                  "password": "amx"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Movistar",
			            "gsm": {
			              "network-id": {
			                "-mcc": "716",
			                "-mnc": "06"
			              },
			              "apn": {
			                "-value": "movistar.pe",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "movistar@datos",
			                "password": "movistar"
			              }
			            }
			          },
			          {
			            "name": "Nextel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "716",
			                "-mnc": "07"
			              },
			              "apn": {
			                "-value": "datacard.nextel.com.pe",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "pf",
			        "provider": {
			          "name": "Vini",
			          "gsm": {
			            "network-id": {
			              "-mcc": "547",
			              "-mnc": "20"
			            },
			            "apn": {
			              "-value": "internet",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" }
			            }
			          }
			        }
			      },
			      {
			        "-code": "ph",
			        "provider": [
			          {
			            "name": "Globe Telecom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "515",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "internet.globe.com.ph",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Postpaid",
			                  "username": "globe",
			                  "password": "globe",
			                  "dns": [
			                    "203.127.225.10",
			                    "203.127.225.11"
			                  ]
			                },
			                {
			                  "-value": "http.globe.com.ph",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prepaid",
			                  "username": "globe",
			                  "password": "globe",
			                  "dns": [
			                    "203.127.225.10",
			                    "203.127.225.11"
			                  ]
			                },
			                {
			                  "-value": "www.globe.com.ph",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "WAP",
			                  "username": "globe",
			                  "password": "globe",
			                  "dns": [
			                    "203.127.225.10",
			                    "203.127.225.11"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Smart",
			            "gsm": {
			              "network-id": {
			                "-mcc": "515",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "witsductoor",
			                "password": "banonoy",
			                "dns": [
			                  "202.57.96.3",
			                  "202.57.96.4"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Digitel (Sun Cellular)",
			            "gsm": {
			              "network-id": {
			                "-mcc": "515",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "minternet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "pk",
			        "provider": [
			          {
			            "name": "Djuice",
			            "gsm": {
			              "network-id": {
			                "-mcc": "515",
			                "-mnc": "06"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "telenor",
			                "password": "telenor"
			              }
			            }
			          },
			          {
			            "name": "Mobilink",
			            "gsm": {
			              "network-id": {
			                "-mcc": "515",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "connect.mobilinkworld.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet"
			                },
			                {
			                  "-value": "jazzconnect.mobilinkworld.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Jazz"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Telenor",
			            "gsm": {
			              "network-id": {
			                "-mcc": "515",
			                "-mnc": "06"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "telenor",
			                "password": "telenor"
			              }
			            }
			          },
			          {
			            "name": "Ufone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "410",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "ufone.internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "ufone",
			                "password": "ufone"
			              }
			            }
			          },
			          {
			            "name": "Warid",
			            "gsm": {
			              "network-id": {
			                "-mcc": "515",
			                "-mnc": "07"
			              },
			              "apn": {
			                "-value": "warid",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "ZONG",
			            "gsm": {
			              "network-id": {
			                "-mcc": "515",
			                "-mnc": "04"
			              },
			              "apn": {
			                "-value": "zonginternet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Ptcl EVO",
			            "cdma": {
			              "username": "vwireless@ptcl.com",
			              "password": "ptcl"
			            }
			          },
			          { "name": "WorldCall Wireless" }
			        ]
			      },
			      {
			        "-code": "pl",
			        "provider": [
			          {
			            "-primary": "true",
			            "name": "T-mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "02"
			              },
			              "voicemail": "602950",
			              "balance-check": { "ussd": "*101#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*111*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": [
			                  { "-type": "postpaid" },
			                  { "-type": "prepaid" }
			                ],
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "213.158.194.1",
			                  "213.158.193.38"
			                ]
			              }
			            }
			          },
			          {
			            "-primary": "true",
			            "name": "Play Online",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "06"
			              },
			              "balance-check": {
			                "ussd": [
			                  "*101#",
			                  "*155#"
			                ]
			              },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*100*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": [
			                  { "-type": "postpaid" },
			                  { "-type": "prepaid" }
			                ],
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "-primary": "true",
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "03"
			              },
			              "voicemail": "*501",
			              "balance-check": { "ussd": "*124*#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*125*CODE#"
			                }
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": [
			                    { "-type": "postpaid" },
			                    { "-type": "prepaid" }
			                  ],
			                  "usage": { "-type": "internet" },
			                  "name": [
			                    "Standard access - with image compression",
			                    {
			                      "-xml:lang": "pl",
			                      "#text": "Dostęp standardowy - z kompresją grafiki"
			                    }
			                  ],
			                  "username": "internet",
			                  "password": "internet",
			                  "dns": [
			                    "194.9.223.79",
			                    "194.204.159.1"
			                  ]
			                },
			                {
			                  "-value": "vpn",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": [
			                    "VPN mode access without compression (requires activation)",
			                    {
			                      "-xml:lang": "pl",
			                      "#text": "Dostęp VPN bez kompresji (wymaga aktywacji)"
			                    }
			                  ],
			                  "username": "internet",
			                  "password": "internet",
			                  "dns": [
			                    "194.9.223.79",
			                    "194.204.159.1"
			                  ]
			                }
			              ]
			            },
			            "cdma": {
			              "username": "cdma@orange",
			              "password": "orange"
			            }
			          },
			          {
			            "-primary": "true",
			            "name": "Plus",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "01"
			              },
			              "voicemail": "2222",
			              "balance-check": { "ussd": "*100#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*123*CODE#"
			                }
			              },
			              "apn": [
			                {
			                  "-value": "www.plusgsm.pl",
			                  "plan": [
			                    { "-type": "postpaid" },
			                    { "-type": "prepaid" }
			                  ],
			                  "usage": { "-type": "internet" },
			                  "name": [
			                    "Standard access",
			                    {
			                      "-xml:lang": "pl",
			                      "#text": "Dostęp standardowy"
			                    }
			                  ],
			                  "username": "plusgsm",
			                  "password": "plusgsm",
			                  "dns": [
			                    "212.2.96.51",
			                    "212.2.96.52"
			                  ]
			                },
			                {
			                  "-value": "pro.plusgsm.pl",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": [
			                    "External dynamic IP address (requires activation)",
			                    {
			                      "-xml:lang": "pl",
			                      "#text": "Zewnętrzny dynamiczny adres IP (wymaga aktywacji)"
			                    }
			                  ],
			                  "username": "plusgsm",
			                  "password": "plusgsm",
			                  "dns": [
			                    "212.2.96.51",
			                    "212.2.96.52"
			                  ]
			                },
			                {
			                  "-value": "m2m.plusgsm.pl",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": [
			                    "External static IP address (requires activation)",
			                    {
			                      "-xml:lang": "pl",
			                      "#text": "Zewnętrzny statyczny adres IP (wymaga aktywacji)"
			                    }
			                  ],
			                  "username": "plusgsm",
			                  "password": "plusgsm",
			                  "dns": [
			                    "212.2.96.51",
			                    "212.2.96.52"
			                  ]
			                },
			                {
			                  "-value": "optimizer",
			                  "plan": [
			                    { "-type": "postpaid" },
			                    { "-type": "prepaid" }
			                  ],
			                  "usage": { "-type": "internet" },
			                  "name": [
			                    "iPlus optimizer with data compression",
			                    {
			                      "-xml:lang": "pl",
			                      "#text": "iPlus optimizer z kompresją danych"
			                    }
			                  ],
			                  "dns": [
			                    "212.2.96.51",
			                    "212.2.96.52"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "-primary": "true",
			            "name": "Cyfrowy Polsat",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "12"
			              },
			              "apn": {
			                "-value": "multi.internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "-primary": "true",
			            "name": "aero2",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "17"
			              },
			              "apn": {
			                "-value": "darmowy",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "-primary": "false",
			            "name": "Multimo",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "03"
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Default APN",
			                  "username": "internet",
			                  "password": "internet"
			                },
			                {
			                  "-value": "mni.internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "APN: mni.internet",
			                  "username": "mni.internet"
			                },
			                {
			                  "-value": "telogic.internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "APN: telogic.internet",
			                  "username": "telogic.internet"
			                }
			              ]
			            },
			            "cdma": {
			              "username": "cdma@orange",
			              "password": "orange"
			            }
			          },
			          {
			            "-primary": "false",
			            "name": "FreeM",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "freedata.pl",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "-primary": "false",
			            "name": "Heyah",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "02"
			              },
			              "balance-check": { "ussd": "*108#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*109*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "heyah.pl",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "username": "heyah",
			                "password": "heyah",
			                "dns": [
			                  "213.158.194.1",
			                  "213.158.193.38"
			                ]
			              }
			            }
			          },
			          {
			            "-primary": "false",
			            "name": "GaduAIR",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "01"
			              },
			              "balance-check": { "ussd": "*101#" },
			              "apn": {
			                "-value": "internet.gadu-gadu.pl",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "-primary": "false",
			            "name": "Aster",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "aster.internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "internet",
			                "password": "internet"
			              }
			            }
			          },
			          {
			            "-primary": "false",
			            "name": "Netia",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "06"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "-primary": "false",
			            "name": "Vectra",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "06"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "-primary": "false",
			            "name": "mBank mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "01"
			              },
			              "balance-check": { "ussd": "*100#" },
			              "apn": {
			                "-value": "www.mobile.pl",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "-primary": "false",
			            "name": "INEA",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "telogic.internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "internet"
			              }
			            }
			          },
			          {
			            "-primary": "false",
			            "name": "Mobilking",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "wapMOBILKING",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "username": "mobilking",
			                "password": "mobilking"
			              }
			            }
			          },
			          {
			            "-primary": "false",
			            "name": "SamiSwoi",
			            "gsm": {
			              "network-id": {
			                "-mcc": "260",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "www.plusgsm.pl",
			                "plan": { "-type": "prepaid" },
			                "usage": { "-type": "internet" },
			                "username": "internet",
			                "password": "internet"
			              }
			            }
			          },
			          {
			            "-primary": "false",
			            "name": "Sferia",
			            "cdma": {
			              "username": "sferia",
			              "password": "sferia"
			            }
			          },
			          {
			            "-primary": "false",
			            "name": "Nordisk Polska",
			            "cdma": {
			              "username": "CDMA",
			              "password": "CDMA"
			            }
			          }
			        ]
			      },
			      {
			        "-code": "pt",
			        "provider": [
			          {
			            "name": "Kanguru",
			            "gsm": {
			              "network-id": {
			                "-mcc": "268",
			                "-mnc": "03"
			              },
			              "apn": [
			                {
			                  "-value": "kanguru-portatil",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": [
			                    "Portable",
			                    {
			                      "-xml:lang": "pt",
			                      "#text": "Portátil"
			                    }
			                  ],
			                  "dns": [
			                    "62.169.67.172",
			                    "62.169.67.171"
			                  ]
			                },
			                {
			                  "-value": "kanguru-tempo",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Tempo (Prepaid)",
			                  "dns": [
			                    "62.169.67.172",
			                    "62.169.67.171"
			                  ]
			                },
			                {
			                  "-value": "kangurufixo",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Fixo",
			                  "dns": [
			                    "62.169.67.172",
			                    "62.169.67.171"
			                  ]
			                },
			                {
			                  "-value": "noapn",
			                  "name": "Apn dinâmico (no apn)",
			                  "dns": [
			                    "62.169.67.172",
			                    "62.169.67.171"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Clix",
			            "gsm": {
			              "network-id": {
			                "-mcc": "268",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "clixinternetmovel",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Optimus",
			            "gsm": {
			              "network-id": {
			                "-mcc": "268",
			                "-mnc": "03"
			              },
			              "apn": [
			                {
			                  "-value": "umts",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "3G"
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS",
			                  "dns": "194.79.69.129"
			                }
			              ]
			            }
			          },
			          {
			            "name": "TMN",
			            "gsm": {
			              "network-id": {
			                "-mcc": "268",
			                "-mnc": "06"
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Tmn Internet",
			                  "username": "tmn",
			                  "password": "tmn",
			                  "dns": [
			                    "88.214.178.1",
			                    "88.214.182.2"
			                  ]
			                },
			                {
			                  "-value": "mmsc.tmn.pt",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "mms" },
			                  "name": "Tmn Mms",
			                  "username": "tmn",
			                  "password": "tmnnet",
			                  "dns": [
			                    "194.65.3.20",
			                    "194.65.3.21"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "268",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "internet.vodafone.pt",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "vodafone",
			                  "password": "vodafone",
			                  "dns": [
			                    "212.18.160.133",
			                    "212.18.160.134"
			                  ]
			                },
			                {
			                  "-value": "net2.vodafone.pt",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Vodafone Internet"
			                },
			                {
			                  "-value": "vas.vodafone.pt",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "mms" },
			                  "name": "Vodafone MMS",
			                  "username": "vas",
			                  "password": "vas"
			                }
			              ]
			            }
			          },
			          {
			            "name": "ZON",
			            "gsm": {
			              "network-id": {
			                "-mcc": "268",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "internet.zon.pt",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Dados Móveis"
			                },
			                {
			                  "-value": "vas.zon.pt",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "mms" },
			                  "name": "MMS",
			                  "username": "vas",
			                  "password": "vas"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "py",
			        "provider": [
			          {
			            "name": "VOX",
			            "gsm": {
			              "network-id": {
			                "-mcc": "744",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "vox.wap",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Personal",
			            "gsm": {
			              "network-id": {
			                "-mcc": "744",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Tigo",
			            "gsm": {
			              "network-id": {
			                "-mcc": "744",
			                "-mnc": "04"
			              },
			              "apn": [
			                {
			                  "-value": "internet.tigo.py",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet"
			                },
			                {
			                  "-value": "broadband.tigo.py",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": [
			                    "Broadband",
			                    {
			                      "-xml:lang": "es",
			                      "#text": "Banda Ancha Móvil"
			                    }
			                  ],
			                  "username": "tigo",
			                  "password": "tigo"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Claro",
			            "gsm": {
			              "network-id": {
			                "-mcc": "744",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "gprs.claro.com.py",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Internet"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "qa",
			        "provider": [
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "427",
			                "-mnc": "02"
			              },
			              "msisdn-query": { "ussd": "*#100#" },
			              "apn": [
			                {
			                  "-value": "web.vodafone.com.qa",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Web"
			                },
			                {
			                  "-value": "vodafone.com.qa",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Web (old)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Q-Tel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "427",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "gprs.qtel",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Qatarnet",
			                "username": "gprs",
			                "password": "gprs"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "re",
			        "provider": {
			          "name": "SFR Réunion",
			          "gsm": {
			            "network-id": {
			              "-mcc": "647",
			              "-mnc": "10"
			            },
			            "msisdn-query": {
			              "sms": {
			                "-text": "ABCd84367",
			                "#text": "+33621012555"
			              }
			            },
			            "apn": [
			              {
			                "-value": "websfr",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Contract / Prepaid"
			              },
			              {
			                "-value": "slsfr",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "SFR slsfr"
			              },
			              {
			                "-value": "internetpro",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "SFR internetpro"
			              },
			              {
			                "-value": "ipnet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "SFR ipnet"
			              }
			            ]
			          }
			        }
			      },
			      {
			        "-code": "ro",
			        "provider": [
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "226",
			                "-mnc": "10"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "172.22.7.21",
			                  "172.22.7.20"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "226",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "tobe.vodafone.ro",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Internet (Prepaid)",
			                  "username": "tobe.vodafone.ro",
			                  "password": "vodafone"
			                },
			                {
			                  "-value": "internet.vodafone.ro",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Internet (Postpaid)",
			                  "username": "internet.vodafone.ro",
			                  "password": "vodafone"
			                },
			                {
			                  "-value": "internet.pre.vodafone.ro",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Internet (Prepaid)",
			                  "username": "internet.pre.vodafone.ro",
			                  "password": "vodafone"
			                },
			                {
			                  "-value": "live.vodafone.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Live! (Postpaid)",
			                  "username": "live",
			                  "password": "vodafone"
			                },
			                {
			                  "-value": "live.pre.vodafone.ro",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Live! (Prepaid)",
			                  "username": "live.pre.vodafone.com",
			                  "password": "vodafone"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Zapp",
			            "cdma": {
			              "username": "zapp",
			              "password": "zapp"
			            }
			          },
			          {
			            "name": "Digi.Net Mobil",
			            "gsm": {
			              "network-id": {
			                "-mcc": "226",
			                "-mnc": "05"
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Home"
			                },
			                {
			                  "-value": "static",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Business (static)"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "rs",
			        "provider": [
			          {
			            "name": "Telenor",
			            "gsm": {
			              "network-id": {
			                "-mcc": "220",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "telenor",
			                "password": "gprs"
			              }
			            }
			          },
			          {
			            "name": "Telekom Srbija",
			            "gsm": {
			              "network-id": {
			                "-mcc": "220",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "gprsinternet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "mts",
			                "password": "064",
			                "dns": "195.178.38.3"
			              }
			            }
			          },
			          {
			            "name": "VIP Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "220",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "vipmobile",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "vipmobile",
			                "password": "vipmobile"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "rw",
			        "provider": [
			          {
			            "name": "MTN",
			            "gsm": {
			              "network-id": {
			                "-mcc": "635",
			                "-mnc": "10"
			              },
			              "apn": {
			                "-value": "internet.mtn",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Tigo",
			            "gsm": {
			              "network-id": {
			                "-mcc": "635",
			                "-mnc": "13"
			              },
			              "apn": {
			                "-value": "web.tigo.rw",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "ru",
			        "provider": [
			          {
			            "name": [
			              "BaikalWestCom",
			              {
			                "-xml:lang": "ru",
			                "#text": "БайкалВестКом"
			              }
			            ],
			            "gsm": {
			              "network-id": {
			                "-mcc": "250",
			                "-mnc": "12"
			              },
			              "apn": {
			                "-value": "inet.bwc.ru",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "bwc",
			                "password": "bwc",
			                "dns": [
			                  "81.18.113.2",
			                  "81.18.112.50"
			                ]
			              }
			            }
			          },
			          {
			            "name": [
			              "Beeline",
			              {
			                "-xml:lang": "ru",
			                "#text": "Билайн"
			              }
			            ],
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "250",
			                  "-mnc": "28"
			                },
			                {
			                  "-mcc": "250",
			                  "-mnc": "99"
			                }
			              ],
			              "balance-check": { "ussd": "*102#" },
			              "apn": [
			                {
			                  "-value": "home.beeline.ru",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": [
			                    "3G modem",
			                    {
			                      "-xml:lang": "ru",
			                      "#text": "USB-модем"
			                    }
			                  ],
			                  "username": "beeline",
			                  "password": "beeline",
			                  "dns": [
			                    "212.44.130.6",
			                    "217.118.83.6"
			                  ]
			                },
			                {
			                  "-value": "internet.beeline.ru",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": [
			                    "Mobile phone",
			                    {
			                      "-xml:lang": "ru",
			                      "#text": "Мобильный телефон"
			                    }
			                  ],
			                  "username": "beeline",
			                  "password": "beeline",
			                  "dns": [
			                    "217.118.66.243",
			                    "217.118.66.244"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "ETK",
			            "gsm": {
			              "network-id": {
			                "-mcc": "250",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "wap.etk.ru",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "MTS",
			            "gsm": {
			              "network-id": {
			                "-mcc": "250",
			                "-mnc": "01"
			              },
			              "balance-check": { "ussd": "*100#" },
			              "apn": {
			                "-value": "internet.mts.ru",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "mts",
			                "password": "mts",
			                "dns": [
			                  "213.87.0.1",
			                  "213.87.1.1"
			                ]
			              }
			            }
			          },
			          {
			            "name": [
			              "Megafon",
			              {
			                "-xml:lang": "ru",
			                "#text": "Мегафон"
			              }
			            ],
			            "gsm": {
			              "network-id": {
			                "-mcc": "250",
			                "-mnc": "02"
			              },
			              "balance-check": { "ussd": "*100#" },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": [
			                  "RUS",
			                  {
			                    "-xml:lang": "ru",
			                    "#text": "Россия"
			                  }
			                ],
			                "username": "gdata",
			                "password": "gdata"
			              }
			            }
			          },
			          {
			            "name": "NCC",
			            "gsm": {
			              "network-id": {
			                "-mcc": "250",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "ncc",
			                "dns": [
			                  "10.0.3.5",
			                  "10.0.3.2"
			                ]
			              }
			            }
			          },
			          {
			            "name": "NTC",
			            "gsm": {
			              "network-id": {
			                "-mcc": "250",
			                "-mnc": "16"
			              },
			              "apn": {
			                "-value": "internet.ntc",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "80.243.64.67",
			                  "80.243.68.34"
			                ]
			              }
			            }
			          },
			          {
			            "name": [
			              "Enisey TeleCom",
			              {
			                "-xml:lang": "ru",
			                "#text": "Енисей Телеком"
			              }
			            ],
			            "gsm": {
			              "network-id": {
			                "-mcc": "250",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "internet.etk.ru",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "etk",
			                "dns": [
			                  "10.10.30.3",
			                  "10.10.30.4"
			                ]
			              }
			            }
			          },
			          {
			            "name": [
			              "Motiv",
			              {
			                "-xml:lang": "ru",
			                "#text": "Мотив"
			              }
			            ],
			            "gsm": {
			              "network-id": {
			                "-mcc": "250",
			                "-mnc": "35"
			              },
			              "apn": {
			                "-value": "inet.ycc.ru",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "motiv",
			                "dns": [
			                  "217.148.52.34",
			                  "217.148.52.3"
			                ]
			              }
			            }
			          },
			          {
			            "name": [
			              "Tatincom",
			              {
			                "-xml:lang": "ru",
			                "#text": "Татинком"
			              }
			            ],
			            "gsm": {
			              "apn": {
			                "-value": "internet.tatincom.ru",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "tatincom",
			                "password": "tatincom",
			                "dns": [
			                  "89.207.96.2",
			                  "89.207.97.18"
			                ]
			              }
			            }
			          },
			          {
			            "name": [
			              "Tele2",
			              {
			                "-xml:lang": "ru",
			                "#text": "Теле2"
			              }
			            ],
			            "gsm": {
			              "network-id": {
			                "-mcc": "250",
			                "-mnc": "20"
			              },
			              "apn": {
			                "-value": "internet.tele2.ru",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "130.244.127.161",
			                  "130.244.127.169"
			                ]
			              }
			            }
			          },
			          {
			            "name": [
			              "Skylink",
			              {
			                "-xml:lang": "ru",
			                "#text": "Скайлинк"
			              }
			            ],
			            "cdma": {
			              "username": "mobile",
			              "password": "internet",
			              "sid": [
			                { "-value": "11396" },
			                { "-value": "11398" },
			                { "-value": "11400" },
			                { "-value": "11418" },
			                { "-value": "11424" },
			                { "-value": "11432" },
			                { "-value": "11434" },
			                { "-value": "11438" },
			                { "-value": "11440" },
			                { "-value": "11442" },
			                { "-value": "11446" },
			                { "-value": "11452" },
			                { "-value": "11456" },
			                { "-value": "11462" },
			                { "-value": "11465" },
			                { "-value": "11482" },
			                { "-value": "11484" },
			                { "-value": "11492" },
			                { "-value": "11494" },
			                { "-value": "11498" },
			                { "-value": "11510" },
			                { "-value": "11532" },
			                { "-value": "11546" },
			                { "-value": "11556" },
			                { "-value": "11568" },
			                { "-value": "11572" },
			                { "-value": "11578" },
			                { "-value": "11582" },
			                { "-value": "11590" },
			                { "-value": "11596" },
			                { "-value": "11604" },
			                { "-value": "11616" },
			                { "-value": "11622" },
			                { "-value": "11630" },
			                { "-value": "11642" },
			                { "-value": "11646" },
			                { "-value": "11650" },
			                { "-value": "11668" },
			                { "-value": "11672" },
			                { "-value": "11676" },
			                { "-value": "11684" },
			                { "-value": "11692" },
			                { "-value": "11698" },
			                { "-value": "11700" },
			                { "-value": "11732" },
			                { "-value": "11736" },
			                { "-value": "11754" },
			                { "-value": "11758" },
			                { "-value": "11772" },
			                { "-value": "11780" },
			                { "-value": "11784" },
			                { "-value": "11788" },
			                { "-value": "11790" },
			                { "-value": "11794" },
			                { "-value": "11802" },
			                { "-value": "11806" },
			                { "-value": "11816" },
			                { "-value": "11826" },
			                { "-value": "11830" },
			                { "-value": "11844" },
			                { "-value": "11848" },
			                { "-value": "11868" },
			                { "-value": "11874" },
			                { "-value": "11884" },
			                { "-value": "11892" },
			                { "-value": "11908" },
			                { "-value": "11922" },
			                { "-value": "11924" },
			                { "-value": "11948" },
			                { "-value": "11960" },
			                { "-value": "11964" },
			                { "-value": "11968" },
			                { "-value": "11978" },
			                { "-value": "11984" },
			                { "-value": "11990" },
			                { "-value": "12006" },
			                { "-value": "12012" },
			                { "-value": "12020" },
			                { "-value": "12060" },
			                { "-value": "12061" },
			                { "-value": "12063" },
			                { "-value": "12064" },
			                { "-value": "12065" },
			                { "-value": "12066" },
			                { "-value": "12067" },
			                { "-value": "12085" },
			                { "-value": "12087" },
			                { "-value": "12090" },
			                { "-value": "12092" },
			                { "-value": "12094" },
			                { "-value": "12095" }
			              ]
			            }
			          },
			          {
			            "name": "U-tel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "250",
			                "-mnc": "39"
			              },
			              "balance-check": { "ussd": "*100#" },
			              "apn": {
			                "-value": "internet.usi.ru",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "sa",
			        "provider": [
			          {
			            "name": "Mobily",
			            "gsm": {
			              "network-id": {
			                "-mcc": "420",
			                "-mnc": "03"
			              },
			              "apn": [
			                {
			                  "-value": "web1",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Postpaid"
			                },
			                {
			                  "-value": "web2",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Prepaid"
			                }
			              ]
			            }
			          },
			          {
			            "name": "STC",
			            "gsm": {
			              "network-id": {
			                "-mcc": "420",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "jawalnet.com.sa",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "212.118.133.101",
			                  "212.118.133.102"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Zain",
			            "gsm": {
			              "network-id": {
			                "-mcc": "420",
			                "-mnc": "04"
			              },
			              "apn": {
			                "-value": "zain",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "se",
			        "provider": [
			          {
			            "-primary": "true",
			            "name": "3",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "240",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "240",
			                  "-mnc": "04"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "data.tre.se",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobiltelefon"
			                },
			                {
			                  "-value": "bredband.tre.se",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Bredband"
			                },
			                {
			                  "-value": "net.tre.se",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Bredband Kontantkort"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Glocalnet",
			            "gsm": {
			              "network-id": {
			                "-mcc": "240",
			                "-mnc": "08"
			              },
			              "apn": [
			                {
			                  "-value": "bredband.glocalnet.se",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobilt Bredband"
			                },
			                {
			                  "-value": "internet.glocalnet.se",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Glocalnet Internet"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Halebop",
			            "gsm": {
			              "network-id": {
			                "-mcc": "240",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "halebop.telia.se",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "ice.net (Nordisk Mobiltelefon)",
			            "cdma": {
			              "username": "cdma",
			              "password": "cdma"
			            }
			          },
			          {
			            "name": "Tele2",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "240",
			                  "-mnc": "07"
			                },
			                {
			                  "-mcc": "240",
			                  "-mnc": "05"
			                }
			              ],
			              "voicemail": "222",
			              "balance-check": {
			                "ussd": "*111#",
			                "dtmf": "211"
			              },
			              "apn": [
			                {
			                  "-value": "internet.tele2.se",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobilt Internet"
			                },
			                {
			                  "-value": "mobileinternet.tele2.se",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobilt Bredband"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Comviq",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "240",
			                  "-mnc": "07"
			                },
			                {
			                  "-mcc": "240",
			                  "-mnc": "05"
			                }
			              ],
			              "voicemail": "222",
			              "balance-check": {
			                "ussd": "*111#",
			                "dtmf": "211"
			              },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*110*CODE#"
			                }
			              },
			              "apn": [
			                {
			                  "-value": "data.comviq.se",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Surf"
			                },
			                {
			                  "-value": "internet.tele2.se",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Tele2 Comviq 3G"
			                },
			                {
			                  "-value": "mobileinternet.tele2.se",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Tele2 Comviq 3G (7,2 Mbit/s)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Multicom Security",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "240",
			                  "-mnc": "01"
			                },
			                {
			                  "-mcc": "240",
			                  "-mnc": "05"
			                }
			              ],
			              "apn": {
			                "-value": "mobiflex.telia.se",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Mobiflex"
			              }
			            }
			          },
			          {
			            "name": "Telenor",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "240",
			                  "-mnc": "04"
			                },
			                {
			                  "-mcc": "240",
			                  "-mnc": "06"
			                },
			                {
			                  "-mcc": "240",
			                  "-mnc": "08"
			                }
			              ],
			              "voicemail": "888",
			              "balance-check": { "ussd": "*222#" },
			              "apn": [
			                {
			                  "-value": "internet.telenor.se",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobilt Internet"
			                },
			                {
			                  "-value": "services.telenor.se",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobilsurf med maxtaxa"
			                },
			                {
			                  "-value": "bredband.telenor.se",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobilt Bredband"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Telia",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "240",
			                  "-mnc": "01"
			                },
			                {
			                  "-mcc": "240",
			                  "-mnc": "05"
			                }
			              ],
			              "voicemail": "*133#",
			              "balance-check": {
			                "ussd": [
			                  "*120#",
			                  "*121#"
			                ]
			              },
			              "apn": {
			                "-value": "online.telia.se",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Telia 3G"
			              }
			            }
			          },
			          {
			            "name": "TDC",
			            "gsm": {
			              "network-id": {
			                "-mcc": "240",
			                "-mnc": "14"
			              },
			              "apn": {
			                "-value": "internet.se",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "djuice",
			            "gsm": {
			              "network-id": {
			                "-mcc": "240",
			                "-mnc": "09"
			              },
			              "apn": {
			                "-value": "internet.djuice.se",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Com Hem",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "240",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "240",
			                  "-mnc": "04"
			                }
			              ],
			              "apn": {
			                "-value": "bredband.comhem.se",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Parlino",
			            "gsm": {
			              "network-id": {
			                "-mcc": "240",
			                "-mnc": "07"
			              },
			              "apn": {
			                "-value": "internet.parlino.se",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Universal Telecom",
			            "gsm": {
			              "apn": [
			                {
			                  "-value": "sp-internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobilt Bredband"
			                },
			                {
			                  "-value": "internet.uvtc.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobilt Internet"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "sg",
			        "provider": [
			          {
			            "name": "M1",
			            "gsm": {
			              "network-id": {
			                "-mcc": "525",
			                "-mnc": "03"
			              },
			              "apn": [
			                {
			                  "-value": "sunsurf",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "SunSurf/Mobile Broadband (postpaid)",
			                  "username": "65",
			                  "dns": [
			                    "202.79.64.21",
			                    "202.79.64.26"
			                  ]
			                },
			                {
			                  "-value": "miworld",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "MiWorld Mobile (postpaid)",
			                  "username": "65(mobilenumber)",
			                  "password": "user123"
			                },
			                {
			                  "-value": "miworldcard",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "MiWorld Mobile (prepaid)",
			                  "username": "65(mobilenumber)",
			                  "password": "user123"
			                },
			                {
			                  "-value": "prepaidbb",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Broadband (prepaid)"
			                },
			                {
			                  "-value": "sunsurfmcard",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "M Card (prepaid)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "SingTel",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "525",
			                  "-mnc": "01"
			                },
			                {
			                  "-mcc": "525",
			                  "-mnc": "02"
			                }
			              ],
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "165.21.100.88",
			                  "165.21.83.88"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Starhub",
			            "gsm": {
			              "network-id": {
			                "-mcc": "525",
			                "-mnc": "05"
			              },
			              "apn": [
			                {
			                  "-value": "shwap",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "WAP",
			                  "username": "star",
			                  "password": "hub",
			                  "dns": "203.116.1.78"
			                },
			                {
			                  "-value": "shppd",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "MaxMobile Broadband (prepaid)"
			                },
			                {
			                  "-value": "shinternet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "MaxMobile Broadband (postpaid)"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "si",
			        "provider": [
			          {
			            "name": "Mobitel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "293",
			                "-mnc": "41"
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Postpaid",
			                  "username": "mobitel",
			                  "password": "internet",
			                  "dns": [
			                    "213.229.248.161",
			                    "193.189.160.11"
			                  ]
			                },
			                {
			                  "-value": "internetpro",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "mobitel",
			                  "password": "internet",
			                  "dns": [
			                    "213.229.248.161",
			                    "193.189.160.11"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Vodafone / Simobil",
			            "gsm": {
			              "network-id": {
			                "-mcc": "293",
			                "-mnc": "40"
			              },
			              "msisdn-query": { "ussd": "*100#" },
			              "apn": {
			                "-value": "internet.simobil.si",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "simobil",
			                "password": "internet",
			                "dns": [
			                  "121.30.86.130",
			                  "193.189.160.11"
			                ]
			              }
			            }
			          },
			          {
			            "name": "T-2",
			            "gsm": {
			              "network-id": {
			                "-mcc": "293",
			                "-mnc": "64"
			              },
			              "apn": {
			                "-value": "internet.t-2.net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "sk",
			        "provider": [
			          {
			            "name": "Slovak Telekom",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "231",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "231",
			                  "-mnc": "04"
			                }
			              ],
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "195.91.0.17",
			                  "194.154.227.17"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "231",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "213.151.200.31",
			                  "213.151.208.162"
			                ]
			              }
			            }
			          },
			          {
			            "name": "O2",
			            "gsm": {
			              "network-id": {
			                "-mcc": "231",
			                "-mnc": "06"
			              },
			              "apn": {
			                "-value": "o2internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Internet",
			                "dns": [
			                  "160.218.161.60",
			                  "194.228.211.33"
			                ]
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "sn",
			        "provider": {
			          "name": "Tigo",
			          "gsm": {
			            "network-id": {
			              "-mcc": "608",
			              "-mnc": "02"
			            },
			            "apn": {
			              "-value": "wap.sentelgsm.com",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" },
			              "dns": [
			                "200.85.0.104",
			                "200.85.0.107"
			              ]
			            }
			          }
			        }
			      },
			      {
			        "-code": "sv",
			        "provider": [
			          {
			            "name": "Movistar",
			            "gsm": {
			              "network-id": {
			                "-mcc": "706",
			                "-mnc": "04"
			              },
			              "apn": {
			                "-value": "internet.movistar.sv",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "movistarsv",
			                "password": "movistarsv"
			              }
			            }
			          },
			          {
			            "name": "digicel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "706",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "wap.digicelsv.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Tigo",
			            "gsm": {
			              "network-id": {
			                "-mcc": "706",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "internet.tigo.sv",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Claro",
			            "gsm": {
			              "network-id": {
			                "-mcc": "706",
			                "-mnc": "10"
			              },
			              "apn": {
			                "-value": "internet.ideasclaro",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "Internet"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "sd",
			        "provider": [
			          {
			            "name": "Zain",
			            "gsm": {
			              "network-id": {
			                "-mcc": "634",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "MTN",
			            "gsm": {
			              "network-id": {
			                "-mcc": "634",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Sudani",
			            "gsm": {
			              "network-id": {
			                "-mcc": "634",
			                "-mnc": "07"
			              },
			              "apn": {
			                "-value": "sudaninet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "sudani",
			                "password": "sudani"
			              }
			            },
			            "cdma": {
			              "username": "sudani",
			              "password": "sudani"
			            }
			          }
			        ]
			      },
			      {
			        "-code": "th",
			        "provider": [
			          {
			            "name": "AIS",
			            "gsm": {
			              "network-id": {
			                "-mcc": "520",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "202.183.255.20",
			                  "202.183.255.21"
			                ]
			              }
			            }
			          },
			          {
			            "name": "DTAC",
			            "gsm": {
			              "network-id": {
			                "-mcc": "520",
			                "-mnc": "18"
			              },
			              "apn": {
			                "-value": "www.dtac.co.th",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "202.44.202.2",
			                  "203.44.144.33"
			                ]
			              }
			            }
			          },
			          {
			            "name": "True Move",
			            "gsm": {
			              "network-id": {
			                "-mcc": "520",
			                "-mnc": "99"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "true",
			                "password": "true"
			              }
			            }
			          },
			          {
			            "name": "TOT 3G",
			            "gsm": {
			              "network-id": {
			                "-mcc": "520",
			                "-mnc": "15"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "tn",
			        "provider": [
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "605",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "weborange",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet"
			                },
			                {
			                  "-value": "mms.otun",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "mms" },
			                  "name": "Internet + MMS"
			                },
			                {
			                  "-value": "keygp",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet Everywhere Prepaid"
			                },
			                {
			                  "-value": "keypro",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet Everywhere Professional"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Tunisie Télécom / TUNTEL",
			            "gsm": {
			              "network-id": {
			                "-mcc": "605",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "mms.tn",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "mms" },
			                  "name": "MMS",
			                  "username": "mms@tt1",
			                  "password": "mms"
			                },
			                {
			                  "-value": "gprs.tn",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS DATA",
			                  "username": "gprs",
			                  "password": "gprs"
			                },
			                {
			                  "-value": "internet.tn",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "WEB DATA"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Tunisiana",
			            "gsm": {
			              "network-id": {
			                "-mcc": "605",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "internet.tunisiana.com",
			                "name": "Internet",
			                "username": "internet",
			                "password": "internet"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "tr",
			        "provider": [
			          {
			            "name": "Avea",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "286",
			                  "-mnc": "03"
			                },
			                {
			                  "-mcc": "286",
			                  "-mnc": "04"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "dns": [
			                    "212.156.4.4",
			                    "212.156.4.20"
			                  ]
			                },
			                {
			                  "-value": "aycell",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "(former Aycell)",
			                  "dns": [
			                    "212.156.4.1",
			                    "212.156.4.4"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Turkcell",
			            "gsm": {
			              "network-id": {
			                "-mcc": "286",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Turkcell internet"
			                },
			                {
			                  "-value": "mgb",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Turkcell 3G"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Vodafone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "286",
			                "-mnc": "02"
			              },
			              "msisdn-query": { "ussd": "*101#" },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "usage": { "-type": "internet" },
			                  "name": "Vodafone Internet",
			                  "username": "vodafone",
			                  "password": "vodafone"
			                },
			                {
			                  "-value": "edge.kktctelsim.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "KKTC Telsim"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "tt",
			        "provider": [
			          {
			            "name": "Digicel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "374",
			                "-mnc": "13"
			              },
			              "apn": {
			                "-value": "wap.digiceltt.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "wap",
			                "password": "wap"
			              }
			            }
			          },
			          {
			            "name": "bmobile / TSTT",
			            "gsm": {
			              "network-id": {
			                "-mcc": "374",
			                "-mnc": "12"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "wap",
			                "password": "wap"
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "tw",
			        "provider": [
			          {
			            "name": [
			              "Chunghwa Telecom (emome)",
			              {
			                "-xml:lang": "zh",
			                "#text": "中華電信 (emome)"
			              }
			            ],
			            "gsm": {
			              "network-id": {
			                "-mcc": "466",
			                "-mnc": "92"
			              },
			              "apn": [
			                {
			                  "-value": "emome",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "username": "web",
			                  "password": "web"
			                },
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" }
			                }
			              ]
			            }
			          },
			          {
			            "name": [
			              "Far EasTone / KGT",
			              {
			                "-xml:lang": "zh",
			                "#text": "遠傳電信 / 和信電訊"
			              }
			            ],
			            "gsm": {
			              "network-id": {
			                "-mcc": "466",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": [
			              "TW Mobile",
			              {
			                "-xml:lang": "zh",
			                "#text": "台湾大哥大"
			              }
			            ],
			            "gsm": {
			              "network-id": {
			                "-mcc": "466",
			                "-mnc": "99"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": [
			              "TransAsia",
			              {
			                "-xml:lang": "zh",
			                "#text": "泛亞電信"
			              }
			            ],
			            "gsm": {
			              "network-id": {
			                "-mcc": "466",
			                "-mnc": "97"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": [
			              "Vibo Telecom / Aurora",
			              {
			                "-xml:lang": "zh",
			                "#text": "威寶電信 (Vibo) / 震旦電信 (Aurora)"
			              }
			            ],
			            "gsm": {
			              "network-id": {
			                "-mcc": "466",
			                "-mnc": "89"
			              },
			              "apn": {
			                "-value": "vibo",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": [
			              "Asia Pacific Telecom (APBW)",
			              {
			                "-xml:lang": "zh",
			                "#text": "亞太電信 (亞太行動寬頻電信)"
			              }
			            ]
			          }
			        ]
			      },
			      {
			        "-code": "tz",
			        "provider": [
			          {
			            "name": "Airtel Tanzania",
			            "gsm": {
			              "network-id": {
			                "-mcc": "640",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Vodacom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "640",
			                "-mnc": "04"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Zantel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "640",
			                "-mnc": "03"
			              },
			              "apn": {
			                "-value": "znet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            },
			            "cdma": {
			              "username": "@zantel.com",
			              "password": " "
			            }
			          },
			          {
			            "name": "tiGO",
			            "gsm": {
			              "network-id": {
			                "-mcc": "640",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Sasatel",
			            "cdma": {
			              "username": "sasatel",
			              "password": "sasatel",
			              "sid": { "-value": "9891" }
			            }
			          },
			          { "name": "TTCL" }
			        ]
			      },
			      {
			        "-code": "ua",
			        "provider": [
			          {
			            "name": "kyivstar",
			            "gsm": {
			              "network-id": {
			                "-mcc": "255",
			                "-mnc": "03"
			              },
			              "apn": [
			                {
			                  "-value": "www.ab.kyivstar.net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Ace&Base",
			                  "username": "igprs",
			                  "password": "internet"
			                },
			                {
			                  "-value": "www.kyivstar.net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Contract GPRS"
			                },
			                {
			                  "-value": "3g.kyivstar.net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet 3G"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Djuice",
			            "gsm": {
			              "network-id": {
			                "-mcc": "255",
			                "-mnc": "03"
			              },
			              "apn": [
			                {
			                  "-value": "www.djuice.com.ua",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet GPRS"
			                },
			                {
			                  "-value": "xl.kyivstar.net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet XL"
			                },
			                {
			                  "-value": "3g.kyivstar.net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet 3G"
			                }
			              ]
			            }
			          },
			          {
			            "name": "life:)",
			            "gsm": {
			              "network-id": {
			                "-mcc": "255",
			                "-mnc": "06"
			              },
			              "balance-check": { "ussd": "*111#" },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Standard",
			                  "dns": [
			                    "212.58.160.33",
			                    "212.58.160.34"
			                  ]
			                },
			                {
			                  "-value": "speed",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Faster",
			                  "dns": [
			                    "212.58.160.33",
			                    "212.58.160.34"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Beeline",
			            "gsm": {
			              "network-id": {
			                "-mcc": "255",
			                "-mnc": "02"
			              },
			              "apn": {
			                "-value": "internet.beeline.ua",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Jeans",
			            "gsm": {
			              "network-id": {
			                "-mcc": "255",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "www.jeans.ua",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "dns": [
			                    "80.255.64.23",
			                    "80.255.64.24"
			                  ]
			                },
			                {
			                  "-value": "hyper.net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Hyper.NET",
			                  "dns": [
			                    "212.58.160.33",
			                    "212.58.160.34"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "MTS",
			            "gsm": {
			              "network-id": {
			                "-mcc": "255",
			                "-mnc": "01"
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS Internet",
			                  "username": "internet",
			                  "dns": [
			                    "212.58.160.33",
			                    "212.58.160.34"
			                  ]
			                },
			                {
			                  "-value": "hyper.net",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Hyper.NET"
			                },
			                {
			                  "-value": "active",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "HyperActive"
			                },
			                {
			                  "-value": "www.umc.ua",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "umc.ua",
			                  "dns": [
			                    "80.255.64.23",
			                    "80.255.64.24"
			                  ]
			                }
			              ]
			            },
			            "cdma": {
			              "name": "MTS Connect 3G",
			              "username": "mobile",
			              "password": "internet",
			              "sid": { "-value": "15907" }
			            }
			          },
			          {
			            "name": "Utel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "255",
			                "-mnc": "07"
			              },
			              "apn": {
			                "-value": "3g.utel.ua",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "CDMA Ukraine",
			            "cdma": {
			              "username": "cdma",
			              "password": "cdma"
			            }
			          },
			          {
			            "name": "InterTelecom",
			            "cdma": {
			              "username": "IT@IT",
			              "password": "IT",
			              "sid": { "-value": "15906" }
			            }
			          },
			          { "name": "PEOPLEnet" }
			        ]
			      },
			      {
			        "-code": "ug",
			        "provider": [
			          {
			            "name": "MTN",
			            "gsm": {
			              "network-id": {
			                "-mcc": "641",
			                "-mnc": "10"
			              },
			              "apn": {
			                "-value": "yellopix.mtn.co.ug",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "193.108.252.50",
			                  "193.108.252.51"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Orange",
			            "gsm": {
			              "network-id": {
			                "-mcc": "641",
			                "-mnc": "14"
			              },
			              "apn": {
			                "-value": "orange.ug",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "UTL",
			            "gsm": {
			              "network-id": {
			                "-mcc": "641",
			                "-mnc": "11"
			              },
			              "apn": [
			                {
			                  "-value": "utbroadband",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Broadband"
			                },
			                {
			                  "-value": "utweb",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Internet"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Warid",
			            "gsm": {
			              "network-id": {
			                "-mcc": "641",
			                "-mnc": "22"
			              },
			              "apn": {
			                "-value": "web.waridtel.co.ug",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Zain",
			            "gsm": {
			              "network-id": {
			                "-mcc": "641",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "web.ug.zain.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "us",
			        "provider": [
			          {
			            "name": "AT&T",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "310",
			                  "-mnc": "038"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "090"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "150"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "410"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "560"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "680"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "wap.cingular",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "MEdia Net (phones)"
			                },
			                {
			                  "-value": "Broadband",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "LaptopConnect (data cards)"
			                },
			                {
			                  "-value": "isp.cingular",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Data Connect (old)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "T-Mobile",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "310",
			                  "-mnc": "026"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "160"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "200"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "210"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "220"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "230"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "240"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "250"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "260"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "270"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "310"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "490"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "580"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "660"
			                },
			                {
			                  "-mcc": "310",
			                  "-mnc": "800"
			                }
			              ],
			              "voicemail": "123",
			              "apn": [
			                {
			                  "-value": "epc.tmobile.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet/WebConnect",
			                  "dns": [
			                    "10.177.0.34",
			                    "10.164.103.44"
			                  ]
			                },
			                {
			                  "-value": "wap.voicestream.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Web2Go/t-zones"
			                },
			                {
			                  "-value": "internet2.voicestream.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet (old)"
			                },
			                {
			                  "-value": "internet3.voicestream.com",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Internet with VPN (old)"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Cincinnati Bell Wireless",
			            "gsm": {
			              "network-id": {
			                "-mcc": "310",
			                "-mnc": "420"
			              },
			              "apn": {
			                "-value": "wap.gocbw.com",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "cbw"
			              }
			            }
			          },
			          {
			            "name": "Sprint",
			            "cdma": {
			              "sid": [
			                { "-value": "4103" },
			                { "-value": "4106" },
			                { "-value": "4107" },
			                { "-value": "4120" },
			                { "-value": "4121" },
			                { "-value": "4124" },
			                { "-value": "4126" },
			                { "-value": "4132" },
			                { "-value": "4135" },
			                { "-value": "4139" },
			                { "-value": "4144" },
			                { "-value": "4145" },
			                { "-value": "4148" },
			                { "-value": "4151" },
			                { "-value": "4153" },
			                { "-value": "4155" },
			                { "-value": "4157" },
			                { "-value": "4159" },
			                { "-value": "4162" },
			                { "-value": "4164" },
			                { "-value": "4166" },
			                { "-value": "4168" },
			                { "-value": "4170" },
			                { "-value": "4171" },
			                { "-value": "4174" },
			                { "-value": "4180" },
			                { "-value": "4181" },
			                { "-value": "4183" },
			                { "-value": "4184" },
			                { "-value": "4186" },
			                { "-value": "4188" },
			                { "-value": "4190" },
			                { "-value": "4194" },
			                { "-value": "4195" },
			                { "-value": "4198" },
			                { "-value": "4274" },
			                { "-value": "4376" },
			                { "-value": "4379" },
			                { "-value": "4384" },
			                { "-value": "4390" },
			                { "-value": "4396" },
			                { "-value": "4418" },
			                { "-value": "4622" },
			                { "-value": "4654" },
			                { "-value": "4694" },
			                { "-value": "4812" },
			                { "-value": "4982" },
			                { "-value": "5116" },
			                { "-value": "5142" }
			              ]
			            }
			          },
			          { "name": "Boost Mobile (Prepaid)" },
			          {
			            "name": "Verizon",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "310",
			                  "-mnc": "995"
			                },
			                {
			                  "-mcc": "311",
			                  "-mnc": "480"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "vzwims",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "4G LTE Contract"
			                },
			                {
			                  "-value": "vzwinternet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "4G LTE Contract",
			                  "dns": [
			                    "66.174.92.14",
			                    "69.78.96.14"
			                  ]
			                },
			                {
			                  "-value": "vzwapp",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "wap" },
			                  "name": "4G LTE Contract"
			                }
			              ]
			            },
			            "cdma": {
			              "sid": [
			                { "-value": "2" },
			                { "-value": "4" },
			                { "-value": "5" },
			                { "-value": "6" },
			                { "-value": "8" },
			                { "-value": "12" },
			                { "-value": "15" },
			                { "-value": "17" },
			                { "-value": "18" },
			                { "-value": "20" },
			                { "-value": "21" },
			                { "-value": "22" },
			                { "-value": "26" },
			                { "-value": "28" },
			                { "-value": "30" },
			                { "-value": "32" },
			                { "-value": "33" },
			                { "-value": "37" },
			                { "-value": "40" },
			                { "-value": "41" },
			                { "-value": "48" },
			                { "-value": "51" },
			                { "-value": "54" },
			                { "-value": "56" },
			                { "-value": "58" },
			                { "-value": "59" },
			                { "-value": "60" },
			                { "-value": "64" },
			                { "-value": "65" },
			                { "-value": "69" },
			                { "-value": "73" },
			                { "-value": "75" },
			                { "-value": "78" },
			                { "-value": "80" },
			                { "-value": "86" },
			                { "-value": "92" },
			                { "-value": "93" },
			                { "-value": "94" },
			                { "-value": "95" },
			                { "-value": "96" },
			                { "-value": "104" },
			                { "-value": "107" },
			                { "-value": "110" },
			                { "-value": "112" },
			                { "-value": "113" },
			                { "-value": "119" },
			                { "-value": "126" },
			                { "-value": "127" },
			                { "-value": "133" },
			                { "-value": "137" },
			                { "-value": "139" },
			                { "-value": "143" },
			                { "-value": "150" },
			                { "-value": "154" },
			                { "-value": "162" },
			                { "-value": "163" },
			                { "-value": "165" },
			                { "-value": "170" },
			                { "-value": "172" },
			                { "-value": "179" },
			                { "-value": "180" },
			                { "-value": "181" },
			                { "-value": "186" },
			                { "-value": "189" },
			                { "-value": "190" },
			                { "-value": "203" },
			                { "-value": "213" },
			                { "-value": "214" },
			                { "-value": "222" },
			                { "-value": "224" },
			                { "-value": "226" },
			                { "-value": "228" },
			                { "-value": "241" },
			                { "-value": "250" },
			                { "-value": "258" },
			                { "-value": "262" },
			                { "-value": "263" },
			                { "-value": "266" },
			                { "-value": "272" },
			                { "-value": "276" },
			                { "-value": "284" },
			                { "-value": "286" },
			                { "-value": "294" },
			                { "-value": "298" },
			                { "-value": "299" },
			                { "-value": "300" },
			                { "-value": "314" },
			                { "-value": "316" },
			                { "-value": "319" },
			                { "-value": "323" },
			                { "-value": "328" },
			                { "-value": "329" },
			                { "-value": "330" },
			                { "-value": "349" },
			                { "-value": "356" },
			                { "-value": "377" },
			                { "-value": "385" },
			                { "-value": "404" },
			                { "-value": "428" },
			                { "-value": "443" },
			                { "-value": "456" },
			                { "-value": "465" },
			                { "-value": "482" },
			                { "-value": "483" },
			                { "-value": "486" },
			                { "-value": "490" },
			                { "-value": "498" },
			                { "-value": "502" },
			                { "-value": "506" },
			                { "-value": "528" },
			                { "-value": "530" },
			                { "-value": "532" },
			                { "-value": "539" },
			                { "-value": "1015" },
			                { "-value": "1026" },
			                { "-value": "1032" },
			                { "-value": "1034" },
			                { "-value": "1062" },
			                { "-value": "1072" },
			                { "-value": "1074" },
			                { "-value": "1076" },
			                { "-value": "1083" },
			                { "-value": "1086" },
			                { "-value": "1088" },
			                { "-value": "1094" },
			                { "-value": "1103" },
			                { "-value": "1129" },
			                { "-value": "1131" },
			                { "-value": "1137" },
			                { "-value": "1139" },
			                { "-value": "1145" },
			                { "-value": "1151" },
			                { "-value": "1153" },
			                { "-value": "1164" },
			                { "-value": "1166" },
			                { "-value": "1174" },
			                { "-value": "1180" },
			                { "-value": "1189" },
			                { "-value": "1193" },
			                { "-value": "1196" },
			                { "-value": "1220" },
			                { "-value": "1224" },
			                { "-value": "1227" },
			                { "-value": "1230" },
			                { "-value": "1267" },
			                { "-value": "1285" },
			                { "-value": "1330" },
			                { "-value": "1358" },
			                { "-value": "1417" },
			                { "-value": "1429" },
			                { "-value": "1476" },
			                { "-value": "1488" },
			                { "-value": "1492" },
			                { "-value": "1494" },
			                { "-value": "1506" },
			                { "-value": "1510" },
			                { "-value": "1514" },
			                { "-value": "1516" },
			                { "-value": "1517" },
			                { "-value": "1519" },
			                { "-value": "1523" },
			                { "-value": "1548" },
			                { "-value": "1552" },
			                { "-value": "1563" },
			                { "-value": "1567" },
			                { "-value": "1614" },
			                { "-value": "1626" },
			                { "-value": "1630" },
			                { "-value": "1632" },
			                { "-value": "1637" },
			                { "-value": "1639" },
			                { "-value": "1641" },
			                { "-value": "1653" },
			                { "-value": "1679" },
			                { "-value": "1736" },
			                { "-value": "1740" },
			                { "-value": "1749" },
			                { "-value": "1760" },
			                { "-value": "1776" },
			                { "-value": "1780" },
			                { "-value": "1790" },
			                { "-value": "1792" },
			                { "-value": "1824" },
			                { "-value": "1826" },
			                { "-value": "1827" },
			                { "-value": "1830" },
			                { "-value": "1832" },
			                { "-value": "1857" },
			                { "-value": "1910" },
			                { "-value": "1912" },
			                { "-value": "1940" },
			                { "-value": "1969" },
			                { "-value": "2004" },
			                { "-value": "2054" },
			                { "-value": "2058" },
			                { "-value": "2060" },
			                { "-value": "2076" },
			                { "-value": "2115" },
			                { "-value": "2119" },
			                { "-value": "2125" },
			                { "-value": "2127" },
			                { "-value": "2149" },
			                { "-value": "3004" },
			                { "-value": "3008" },
			                { "-value": "3046" },
			                { "-value": "3066" },
			                { "-value": "3216" },
			                { "-value": "3218" },
			                { "-value": "3228" },
			                { "-value": "6709" },
			                { "-value": "6711" },
			                { "-value": "7532" },
			                { "-value": "7536" },
			                { "-value": "9640" },
			                { "-value": "9642" },
			                { "-value": "9644" }
			              ]
			            }
			          },
			          {
			            "name": "US Cellular",
			            "cdma": {
			              "sid": [
			                { "-value": "5" },
			                { "-value": "104" },
			                { "-value": "166" },
			                { "-value": "191" },
			                { "-value": "193" },
			                { "-value": "195" },
			                { "-value": "217" },
			                { "-value": "221" },
			                { "-value": "246" },
			                { "-value": "298" },
			                { "-value": "303" },
			                { "-value": "309" },
			                { "-value": "331" },
			                { "-value": "333" },
			                { "-value": "340" },
			                { "-value": "364" },
			                { "-value": "384" },
			                { "-value": "389" },
			                { "-value": "393" },
			                { "-value": "413" },
			                { "-value": "445" },
			                { "-value": "580" },
			                { "-value": "599" },
			                { "-value": "1059" },
			                { "-value": "1061" },
			                { "-value": "1075" },
			                { "-value": "1173" },
			                { "-value": "1175" },
			                { "-value": "1200" },
			                { "-value": "1211" },
			                { "-value": "1213" },
			                { "-value": "1219" },
			                { "-value": "1223" },
			                { "-value": "1228" },
			                { "-value": "1229" },
			                { "-value": "1237" },
			                { "-value": "1272" },
			                { "-value": "1317" },
			                { "-value": "1320" },
			                { "-value": "1399" },
			                { "-value": "1403" },
			                { "-value": "1406" },
			                { "-value": "1419" },
			                { "-value": "1425" },
			                { "-value": "1427" },
			                { "-value": "1484" },
			                { "-value": "1521" },
			                { "-value": "1541" },
			                { "-value": "1543" },
			                { "-value": "1574" },
			                { "-value": "1595" },
			                { "-value": "1607" },
			                { "-value": "1610" },
			                { "-value": "1643" },
			                { "-value": "1753" },
			                { "-value": "1779" },
			                { "-value": "1783" },
			                { "-value": "1794" },
			                { "-value": "1802" },
			                { "-value": "1819" },
			                { "-value": "1821" },
			                { "-value": "1881" },
			                { "-value": "1914" },
			                { "-value": "1983" },
			                { "-value": "2066" },
			                { "-value": "2141" }
			              ]
			            }
			          },
			          {
			            "name": "Alltel",
			            "gsm": {
			              "network-id": {
			                "-mcc": "310",
			                "-mnc": "590"
			              }
			            },
			            "cdma": {
			              "sid": [
			                { "-value": "32" },
			                { "-value": "42" },
			                { "-value": "52" },
			                { "-value": "53" },
			                { "-value": "54" },
			                { "-value": "57" },
			                { "-value": "71" },
			                { "-value": "74" },
			                { "-value": "79" },
			                { "-value": "83" },
			                { "-value": "84" },
			                { "-value": "85" },
			                { "-value": "97" },
			                { "-value": "100" },
			                { "-value": "114" },
			                { "-value": "116" },
			                { "-value": "120" },
			                { "-value": "126" },
			                { "-value": "130" },
			                { "-value": "142" },
			                { "-value": "144" },
			                { "-value": "152" },
			                { "-value": "156" },
			                { "-value": "182" },
			                { "-value": "186" },
			                { "-value": "188" },
			                { "-value": "202" },
			                { "-value": "204" },
			                { "-value": "205" },
			                { "-value": "208" },
			                { "-value": "212" },
			                { "-value": "216" },
			                { "-value": "220" },
			                { "-value": "240" },
			                { "-value": "244" },
			                { "-value": "256" },
			                { "-value": "260" },
			                { "-value": "272" },
			                { "-value": "281" },
			                { "-value": "282" },
			                { "-value": "292" },
			                { "-value": "304" },
			                { "-value": "306" },
			                { "-value": "312" },
			                { "-value": "318" },
			                { "-value": "338" },
			                { "-value": "342" },
			                { "-value": "344" },
			                { "-value": "348" },
			                { "-value": "350" },
			                { "-value": "368" },
			                { "-value": "374" },
			                { "-value": "376" },
			                { "-value": "386" },
			                { "-value": "387" },
			                { "-value": "392" },
			                { "-value": "396" },
			                { "-value": "416" },
			                { "-value": "418" },
			                { "-value": "424" },
			                { "-value": "430" },
			                { "-value": "440" },
			                { "-value": "444" },
			                { "-value": "448" },
			                { "-value": "462" },
			                { "-value": "478" },
			                { "-value": "487" },
			                { "-value": "491" },
			                { "-value": "504" },
			                { "-value": "518" },
			                { "-value": "520" },
			                { "-value": "544" },
			                { "-value": "546" },
			                { "-value": "547" },
			                { "-value": "550" },
			                { "-value": "558" },
			                { "-value": "570" },
			                { "-value": "578" },
			                { "-value": "1008" },
			                { "-value": "1012" },
			                { "-value": "1014" },
			                { "-value": "1016" },
			                { "-value": "1025" },
			                { "-value": "1031" },
			                { "-value": "1033" },
			                { "-value": "1038" },
			                { "-value": "1040" },
			                { "-value": "1042" },
			                { "-value": "1044" },
			                { "-value": "1046" },
			                { "-value": "1048" },
			                { "-value": "1052" },
			                { "-value": "1054" },
			                { "-value": "1056" },
			                { "-value": "1058" },
			                { "-value": "1093" },
			                { "-value": "1118" },
			                { "-value": "1120" },
			                { "-value": "1124" },
			                { "-value": "1126" },
			                { "-value": "1148" },
			                { "-value": "1154" },
			                { "-value": "1156" },
			                { "-value": "1236" },
			                { "-value": "1244" },
			                { "-value": "1246" },
			                { "-value": "1248" },
			                { "-value": "1250" },
			                { "-value": "1252" },
			                { "-value": "1254" },
			                { "-value": "1256" },
			                { "-value": "1258" },
			                { "-value": "1260" },
			                { "-value": "1262" },
			                { "-value": "1264" },
			                { "-value": "1266" },
			                { "-value": "1268" },
			                { "-value": "1270" },
			                { "-value": "1271" },
			                { "-value": "1296" },
			                { "-value": "1298" },
			                { "-value": "1302" },
			                { "-value": "1311" },
			                { "-value": "1332" },
			                { "-value": "1334" },
			                { "-value": "1336" },
			                { "-value": "1338" },
			                { "-value": "1340" },
			                { "-value": "1342" },
			                { "-value": "1344" },
			                { "-value": "1346" },
			                { "-value": "1348" },
			                { "-value": "1370" },
			                { "-value": "1372" },
			                { "-value": "1375" },
			                { "-value": "1383" },
			                { "-value": "1385" },
			                { "-value": "1393" },
			                { "-value": "1400" },
			                { "-value": "1414" },
			                { "-value": "1422" },
			                { "-value": "1424" },
			                { "-value": "1426" },
			                { "-value": "1466" },
			                { "-value": "1493" },
			                { "-value": "1495" },
			                { "-value": "1499" },
			                { "-value": "1501" },
			                { "-value": "1526" },
			                { "-value": "1528" },
			                { "-value": "1530" },
			                { "-value": "1532" },
			                { "-value": "1534" },
			                { "-value": "1536" },
			                { "-value": "1538" },
			                { "-value": "1540" },
			                { "-value": "1542" },
			                { "-value": "1544" },
			                { "-value": "1546" },
			                { "-value": "1558" },
			                { "-value": "1560" },
			                { "-value": "1566" },
			                { "-value": "1568" },
			                { "-value": "1638" },
			                { "-value": "1640" },
			                { "-value": "1642" },
			                { "-value": "1650" },
			                { "-value": "1652" },
			                { "-value": "1654" },
			                { "-value": "1688" },
			                { "-value": "1712" },
			                { "-value": "1720" },
			                { "-value": "1763" },
			                { "-value": "1765" },
			                { "-value": "1800" },
			                { "-value": "1816" },
			                { "-value": "1818" },
			                { "-value": "1866" },
			                { "-value": "1874" },
			                { "-value": "1900" },
			                { "-value": "1913" },
			                { "-value": "1916" },
			                { "-value": "1928" },
			                { "-value": "1930" },
			                { "-value": "1934" },
			                { "-value": "1938" },
			                { "-value": "1972" },
			                { "-value": "1982" },
			                { "-value": "1984" },
			                { "-value": "1986" },
			                { "-value": "1989" },
			                { "-value": "1992" },
			                { "-value": "2010" },
			                { "-value": "2012" },
			                { "-value": "2014" },
			                { "-value": "2018" },
			                { "-value": "2022" },
			                { "-value": "2026" },
			                { "-value": "2040" },
			                { "-value": "2044" },
			                { "-value": "2046" },
			                { "-value": "2064" },
			                { "-value": "2133" },
			                { "-value": "3020" },
			                { "-value": "3226" },
			                { "-value": "3244" },
			                { "-value": "3292" },
			                { "-value": "30524" },
			                { "-value": "30635" }
			              ]
			            }
			          },
			          { "name": "Leap Wireless" },
			          {
			            "name": "Cricket Communications",
			            "gsm": {
			              "network-id": {
			                "-mcc": "310",
			                "-mnc": "000"
			              }
			            }
			          },
			          { "name": "Jump Mobile (Prepaid)" },
			          {
			            "name": "MetroPCS",
			            "cdma": {
			              "sid": [
			                { "-value": "4269" },
			                { "-value": "4273" },
			                { "-value": "4387" },
			                { "-value": "4531" },
			                { "-value": "4533" },
			                { "-value": "4547" },
			                { "-value": "4815" },
			                { "-value": "4855" },
			                { "-value": "5007" },
			                { "-value": "5023" },
			                { "-value": "5037" },
			                { "-value": "5097" },
			                { "-value": "5167" },
			                { "-value": "5199" },
			                { "-value": "21580" }
			              ]
			            }
			          },
			          {
			            "name": "Virgin Mobile / Helio",
			            "cdma": {
			              "sid": { "-value": "4183" }
			            }
			          },
			          {
			            "name": "Cellular South",
			            "cdma": {
			              "sid": [
			                { "-value": "160" },
			                { "-value": "264" },
			                { "-value": "1382" },
			                { "-value": "1394" },
			                { "-value": "1996" }
			              ]
			            }
			          },
			          {
			            "name": "BendBroadband",
			            "gsm": {
			              "network-id": {
			                "-mcc": "311",
			                "-mnc": "570"
			              },
			              "apn": {
			                "-value": "ISP",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "MTPCS (Cellular One)",
			            "gsm": {
			              "network-id": {
			                "-mcc": "310",
			                "-mnc": "570"
			              },
			              "apn": {
			                "-value": "wapgw.chinookwireless.net",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "Mid-Rivers Cellular",
			            "cdma": {
			              "sid": { "-value": "3102" }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "uy",
			        "provider": [
			          {
			            "name": "Ancel",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "748",
			                  "-mnc": "00"
			                },
			                {
			                  "-mcc": "748",
			                  "-mnc": "01"
			                }
			              ],
			              "apn": [
			                {
			                  "-value": "adslmovil",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "ADSL Móvil",
			                  "dns": [
			                    "200.40.30.245",
			                    "200.40.220.245"
			                  ]
			                },
			                {
			                  "-value": "prepago.ancel",
			                  "plan": { "-type": "prepaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "ADSL Móvil Prepago",
			                  "username": "BAM",
			                  "password": "BAM"
			                },
			                {
			                  "-value": "gprs.ancel",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "GPRS",
			                  "dns": [
			                    "200.40.30.245",
			                    "200.40.220.245"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Claro",
			            "gsm": {
			              "network-id": {
			                "-mcc": "748",
			                "-mnc": "10"
			              },
			              "apn": [
			                {
			                  "-value": "gprs.claro.com.uy",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "3G Internet",
			                  "username": "ctigprs",
			                  "password": "ctigprs999"
			                },
			                {
			                  "-value": "internet.ctimovil.com.uy",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "2G Internet",
			                  "username": "ctiweb",
			                  "password": "ctiweb999"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Movistar",
			            "gsm": {
			              "network-id": {
			                "-mcc": "748",
			                "-mnc": "07"
			              },
			              "apn": [
			                {
			                  "-value": "apnumt.movistar.com.uy",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "3G Internet",
			                  "username": "movistar",
			                  "password": "movistar"
			                },
			                {
			                  "-value": "webapn.movistar.com.uy",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "2G Internet",
			                  "username": "movistar",
			                  "password": "movistar"
			                }
			              ]
			            }
			          }
			        ]
			      },
			      {
			        "-code": "uz",
			        "provider": [
			          {
			            "name": "Beeline",
			            "gsm": {
			              "network-id": {
			                "-mcc": "434",
			                "-mnc": "04"
			              },
			              "apn": {
			                "-value": "internet.beeline.uz",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "beeline",
			                "password": "beeline"
			              }
			            }
			          },
			          {
			            "name": "MTS (Uzdunrobita)",
			            "gsm": {
			              "network-id": {
			                "-mcc": "434",
			                "-mnc": "07"
			              },
			              "apn": {
			                "-value": "net.mts.uz",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "mts",
			                "password": "mts"
			              }
			            }
			          },
			          {
			            "name": "Ucell",
			            "gsm": {
			              "network-id": {
			                "-mcc": "434",
			                "-mnc": "05"
			              },
			              "apn": { "-value": "internet" }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "vc",
			        "provider": {
			          "name": "Digicel",
			          "gsm": {
			            "network-id": {
			              "-mcc": "360",
			              "-mnc": "070"
			            },
			            "apn": {
			              "-value": "wap.digiceloecs.com",
			              "plan": { "-type": "postpaid" },
			              "usage": { "-type": "internet" },
			              "username": "wapoecs",
			              "password": "wap03oecs"
			            }
			          }
			        }
			      },
			      {
			        "-code": "ve",
			        "provider": [
			          {
			            "name": "Digitel TIM",
			            "gsm": {
			              "network-id": [
			                {
			                  "-mcc": "734",
			                  "-mnc": "01"
			                },
			                {
			                  "-mcc": "734",
			                  "-mnc": "02"
			                },
			                {
			                  "-mcc": "734",
			                  "-mnc": "03"
			                }
			              ],
			              "apn": {
			                "-value": "gprsweb.digitel.ve",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": "57.67.127.195"
			              }
			            }
			          },
			          {
			            "name": "Movilnet",
			            "gsm": {
			              "network-id": {
			                "-mcc": "734",
			                "-mnc": "06"
			              },
			              "apn": {
			                "-value": "int.movilnet.com.ve",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "200.44.32.12",
			                  "200.11.248.12"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Movistar",
			            "gsm": {
			              "network-id": {
			                "-mcc": "734",
			                "-mnc": "04"
			              },
			              "apn": {
			                "-value": "internet.movistar.ve",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "200.35.65.3",
			                  "200.35.65.4"
			                ]
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "vn",
			        "provider": [
			          {
			            "name": "MobiFone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "452",
			                "-mnc": "01"
			              },
			              "apn": {
			                "-value": "m-wap",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "username": "mms",
			                "password": "mms"
			              }
			            }
			          },
			          {
			            "name": "Vinaphone",
			            "gsm": {
			              "network-id": {
			                "-mcc": "452",
			                "-mnc": "02"
			              },
			              "apn": [
			                {
			                  "-value": "m3-world",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Internet",
			                  "username": "mms",
			                  "password": "mms"
			                },
			                {
			                  "-value": "m3-card",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Broadband",
			                  "username": "mms",
			                  "password": "mms"
			                }
			              ]
			            }
			          },
			          {
			            "name": "S-Fone",
			            "cdma": {
			              "username": "S-Fone",
			              "sid": { "-value": "13331" }
			            }
			          },
			          {
			            "name": "Viettel Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "452",
			                "-mnc": "04"
			              },
			              "apn": [
			                {
			                  "-value": "v-internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Mobile Internet"
			                },
			                {
			                  "-value": "e-connect",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "D-com 3G"
			                }
			              ]
			            }
			          },
			          {
			            "name": "Vietnamobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "452",
			                "-mnc": "05"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          },
			          {
			            "name": "EVNTelecom/E-Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "452",
			                "-mnc": "08"
			              },
			              "apn": {
			                "-value": "e-internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "name": "EVNTelecomNet"
			              }
			            },
			            "cdma": {
			              "username": "evntelecom",
			              "password": "evntelecom"
			            }
			          },
			          {
			            "name": "Beeline VN",
			            "gsm": {
			              "network-id": {
			                "-mcc": "452",
			                "-mnc": "07"
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      },
			      {
			        "-code": "za",
			        "provider": [
			          {
			            "name": "Cell-c",
			            "gsm": {
			              "network-id": {
			                "-mcc": "655",
			                "-mnc": "07"
			              },
			              "msisdn-query": { "ussd": "*147*100#" },
			              "balance-check": { "ussd": "*101#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*102*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "196.7.0.138",
			                  "196.7.142.132"
			                ]
			              }
			            }
			          },
			          {
			            "name": "MTN",
			            "gsm": {
			              "network-id": {
			                "-mcc": "655",
			                "-mnc": "10"
			              },
			              "msisdn-query": { "ussd": "*123*888#" },
			              "balance-check": { "ussd": "*141#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*141*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "196.11.240.241",
			                  "209.212.97.1"
			                ]
			              }
			            }
			          },
			          {
			            "name": "Vodacom",
			            "gsm": {
			              "network-id": {
			                "-mcc": "655",
			                "-mnc": "01"
			              },
			              "msisdn-query": { "ussd": "*111*501#" },
			              "balance-check": { "ussd": "*100#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*100*01*CODE#"
			                }
			              },
			              "apn": [
			                {
			                  "-value": "internet",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "dns": [
			                    "196.207.40.165",
			                    "196.43.46.190"
			                  ]
			                },
			                {
			                  "-value": "unrestricted",
			                  "plan": { "-type": "postpaid" },
			                  "usage": { "-type": "internet" },
			                  "name": "Unrestricted",
			                  "dns": [
			                    "196.207.32.69",
			                    "196.43.45.190"
			                  ]
			                }
			              ]
			            }
			          },
			          {
			            "name": "Virgin Mobile",
			            "gsm": {
			              "network-id": {
			                "-mcc": "655",
			                "-mnc": "07"
			              },
			              "balance-check": { "ussd": "*101#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*102*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "vdata",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" },
			                "dns": [
			                  "196.7.0.138",
			                  "196.7.142.132"
			                ]
			              }
			            }
			          },
			          {
			            "name": "8.ta",
			            "gsm": {
			              "network-id": {
			                "-mcc": "655",
			                "-mnc": "02"
			              },
			              "msisdn-query": { "ussd": "*1#" },
			              "balance-check": { "ussd": "*188#" },
			              "balance-top-up": {
			                "ussd": {
			                  "-replacement": "CODE",
			                  "#text": "*188*CODE#"
			                }
			              },
			              "apn": {
			                "-value": "internet",
			                "plan": { "-type": "postpaid" },
			                "usage": { "-type": "internet" }
			              }
			            }
			          }
			        ]
			      }
			    ]
			  }
			}
	;