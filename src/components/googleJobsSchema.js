<script type="application/ld+json"> {
    "@context" : "http://schema.org/",
    "@type" : "JobPosting",
    "title" : "{title}",
    "description" : "{description}",
    "datePosted" : "{date}",
    "validThrough" : "{validThru}",
    "employmentType" : "CONTRACTOR",
    "hiringOrganization" : {
      "@type" : "Organization",
      "name" : "{company}"
    },
    "jobLocation" : {
      "@type" : "Place",
      "address" : {
        "@type" : "PostalAddress",
        "addressLocality" : "{location}"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "GBP",
      "value": {
        "@type": "QuantitativeValue",
        "value": {baseSalary},
        "unitText": "HOUR"
      }
    }
  }
  </script>

  export default googleJobsSchema