{
  "outputFileDetails": {
    "outputDirectory": "datacatalog.nas.path",
    "outputFileName": "output.ttl"
  },
  "attributesName": [
    "resource_key",
    "resource_name",
    "RSRC_CRT_TS",
    "RSRC_ALTER_TS",
    "CMT_TX",
    "OWNER_DEPT_CD",
    "IS_PII",
    "is_reference_data",
    "is_transactional_data",
    "RSRC_DIR_TX",
    "RSTY_CD"
  ],
  "attributes": {
    "resource_key": {
      "type": ["mscore:SchemaMetaData"],
      "minting": "msinfo:_SchemaMetaData_",
      "triples": [
        {
          "predicate": "dcat:identifier",
          "subject": "resource_key",
          "useOriginalValue": true
        }
      ]
    },
    "resource_name": {
      "literalType": "xsd:string",
      "type": [],
      "triples": [
        {
          "predicate": "skos:prefLabel",
          "subject": "resource_key"
        }
      ]
    },
    "RSRC_CRT_TS": {
      "literalType": "xsd:dateTime",
      "type": [],
      "triples": [
        {
          "predicate": "dct:created",
          "subject": "resource_key"
        }
      ]
    },
    "RSRC_ALTER_TS": {
      "literalType": "xsd:dateTime",
      "type": [],
      "triples": [
        {
          "predicate": "dct:modified",
          "subject": "resource_key"
        }
      ]
    },
    "CMT_TX": {
      "literalType": "xsd:string",
      "type": [],
      "triples": [
        {
          "predicate": "mscore:description",
          "subject": "resource_key"
        }
      ]
    },
    "OWNER_DEPT_CD": {
      "literalType": "xsd:string",
      "type": [],
      "triples": [
        {
          "predicate": "mscore:Ownership",
          "subject": "resource_key"
        }
      ]
    },
    "IS_PII": {
      "literalType": "xsd:boolean",
      "type": [],
      "triples": [
        {
          "predicate": "mstech:PiiFlag",
          "subject": "resource_key"
        }
      ]
    },
    "is_reference_data": {
      "literalType": "xsd:boolean",
      "type": [],
      "triples": [
        {
          "predicate": "msInfoMgt:isReferenceData",
          "subject": "resource_key"
        }
      ]
    },
    "is_transactional_data": {
      "literalType": "xsd:boolean",
      "type": [],
      "triples": [
        {
          "predicate": "msInfoMgt:isTransactionalData",
          "subject": "resource_key"
        }
      ]
    },
    "RSRC_DIR_TX": {
      "literalType": "xsd:string",
      "type": [],
      "triples": [
        {
          "predicate": "msinfo:_ContainerType_computerDirectory",
          "subject": "resource_key"
        }
      ]
    },
    "RSTY_CD": {
      "literalType": "xsd:string",
      "type": [],
      "triples": [
        {
          "predicate": "dcterms:type",
          "subject": "resource_key"
        }
      ]
    }
  }
}
