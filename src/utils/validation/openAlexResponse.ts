import * as zod from 'zod';

const metaSchema = zod.object({
    count: zod.number(),
    db_response_time_ms: zod.number(),
    page: zod.number(),
    per_page: zod.number(),
    groups_count: zod.number().nullable(),
});

const idsSchema = zod.object({
    openalex: zod.string(),
    doi: zod.string(),
    mag: zod.string().optional(),
    pmid: zod.string().optional(),
    pmcid: zod.string().optional(),
});

const sourceSchema = zod.object({
    id: zod.string(),
    display_name: zod.string(),
    issn_l: zod.string().nullable(),
    issn: zod.array(zod.string()).nullable(),
    is_oa: zod.boolean(),
    is_in_doaj: zod.boolean(),
    is_core: zod.boolean(),
    host_organization: zod.string().nullable(),
    host_organization_name: zod.string().nullable(),
    host_organization_lineage: zod.array(zod.string()),
    host_organization_lineage_names: zod.array(zod.string()),
    type: zod.string(),
});

const primaryLocationSchema = zod.object({
    is_oa: zod.boolean(),
    landing_page_url: zod.string(),
    pdf_url: zod.string().nullable(),
    source: sourceSchema.nullable(),
    license: zod.string().nullable(),
    license_id: zod.string().nullable(),
    version: zod.string().nullable(),
    is_accepted: zod.boolean(),
    is_published: zod.boolean(),
});

const openAccessSchema = zod.object({
    is_oa: zod.boolean(),
    oa_status: zod.string(),
    oa_url: zod.string().nullable(),
    any_repository_has_fulltext: zod.boolean(),
});

const authorSchema = zod.object({
    id: zod.string(),
    display_name: zod.string(),
    orcid: zod.string().nullable(),
});

const institutionSchema = zod.object({
    id: zod.string(),
    display_name: zod.string(),
    ror: zod.string(),
    country_code: zod.string(),
    type: zod.string(),
    lineage: zod.array(zod.string()),
});

const affiliationSchema = zod.object({
    raw_affiliation_string: zod.string(),
    institution_ids: zod.array(zod.string()),
});

const authorshipSchema = zod.object({
    author_position: zod.string(),
    author: authorSchema,
    institutions: zod.array(institutionSchema),
    countries: zod.array(zod.string()),
    is_corresponding: zod.boolean(),
    raw_author_name: zod.string(),
    raw_affiliation_strings: zod.array(zod.string()),
    affiliations: zod.array(affiliationSchema),
});

// const citationPercentileYearSchema = zod.object({
//     min: zod.number(),
//     max: zod.number(),
// });

const biblioSchema = zod.object({
    volume: zod.string().nullable(),
    issue: zod.string().nullable(),
    first_page: zod.string().nullable(),
    last_page: zod.string().nullable(),
});

const conceptSchema = zod.object({
    id: zod.string(),
    wikidata: zod.string(),
    display_name: zod.string(),
    level: zod.number(),
    score: zod.number(),
});

const keywordSchema = zod.object({
    id: zod.string(),
    display_name: zod.string(),
    score: zod.number(),
});

const locationSchema = zod.object({
    is_oa: zod.boolean(),
    landing_page_url: zod.string(),
    pdf_url: zod.string().nullable(),
    source: sourceSchema.nullable(),
    license: zod.string().nullable(),
    license_id: zod.string().nullable(),
    version: zod.string().nullable(),
    is_accepted: zod.boolean(),
    is_published: zod.boolean(),
});

const citedByPercentileYearSchema = zod.object({
    min: zod.number(),
    max: zod.number(),
});

const apcSchema = zod.object({
    value: zod.number(),
    currency: zod.string(),
    value_usd: zod.number(),
    provenance: zod.string(),
});

const meshSchema = zod.object({
    descriptor_ui: zod.string(),
    descriptor_name: zod.string(),
    qualifier_ui: zod.string(),
    qualifier_name: zod.string().nullable(),
    is_major_topic: zod.boolean(),
});

const sustainableDevelopmentGoalSchema = zod.object({
    id: zod.string(),
    score: zod.number(),
    display_name: zod.string(),
});

const grantSchema = zod.object({
    funder: zod.string(),
    funder_display_name: zod.string(),
    award_id: zod.string(),
});

const countByYearSchema = zod.object({
    year: zod.number(),
    cited_by_count: zod.number(),
});

const resultsSchema = zod.object({
    id: zod.string(),
    doi: zod.string(),
    title: zod.string(),
    display_name: zod.string(),
    relevance_score: zod.number(),
    publication_year: zod.number(),
    publication_date: zod.string(),
    ids: idsSchema,
    language: zod.string(),
    primary_location: primaryLocationSchema,
    type: zod.string(),
    type_crossref: zod.string(),
    indexed_in: zod.array(zod.string()),
    open_access: openAccessSchema,
    authorships: zod.array(authorshipSchema),
    institution_assertions: zod.array(zod.string()),
    countries_distinct_count: zod.number(),
    institutions_distinct_count: zod.number(),
    corresponding_author_ids: zod.array(zod.string()),
    corresponding_institution_ids: zod.array(zod.string()),
    apc_list: apcSchema.nullable(),
    apc_paid: apcSchema.nullable(),
    fwci: zod.number().nullable(),
    has_fulltext: zod.boolean(),
    cited_by_count: zod.number(),
    citation_normalized_percentile: zod.number().nullable(),
    cited_by_percentile_year: citedByPercentileYearSchema,
    biblio: biblioSchema,
    is_retracted: zod.boolean(),
    is_paratext: zod.boolean(),
    primary_topic: zod.string().nullable(),
    topics: zod.array(conceptSchema),
    keywords: zod.array(keywordSchema),
    concepts: zod.array(conceptSchema),
    mesh: zod.array(meshSchema),
    locations_count: zod.number(),
    locations: zod.array(locationSchema),
    best_oa_location: locationSchema.nullable(),
    sustainable_development_goals: zod.array(sustainableDevelopmentGoalSchema),
    grants: zod.array(grantSchema),
    datasets: zod.array(zod.string()),
    versions: zod.array(zod.string()),
    referenced_works_count: zod.number(),
    referenced_works: zod.array(zod.string()),
    related_works: zod.array(zod.string()),
    abstract_inverted_index: zod.record(zod.string(), zod.array(zod.number())),
    cited_by_api_url: zod.string(),
    counts_by_year: zod.array(countByYearSchema),
    updated_date: zod.string(),
    created_date: zod.string(),
});

export const oaValidationSchema = zod.object({
    meta: metaSchema,
    results: zod.array(resultsSchema),
    group_by: zod.array(zod.string()),
});
