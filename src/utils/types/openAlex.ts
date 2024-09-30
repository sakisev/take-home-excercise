export interface Meta {
    count: number;
    db_response_time_ms: number;
    page: number;
    per_page: number;
    groups_count: number | null;
}

export interface IDs {
    openalex: string;
    doi: string;
    mag?: string;
    pmid?: string;
    pmcid?: string;
}

export interface PrimaryLocation {
    is_oa: boolean;
    landing_page_url: string;
    pdf_url: string | null;
    source: Source | null;
    license: string | null;
    license_id: string | null;
    version: string | null;
    is_accepted: boolean;
    is_published: boolean;
}

export interface Source {
    id: string;
    display_name: string;
    issn_l: string | null;
    issn: string[] | null;
    is_oa: boolean;
    is_in_doaj: boolean;
    is_core: boolean;
    host_organization: string | null;
    host_organization_name: string | null;
    host_organization_lineage: string[];
    host_organization_lineage_names: string[];
    type: string;
}

export interface OpenAccess {
    is_oa: boolean;
    oa_status: string;
    oa_url: string | null;
    any_repository_has_fulltext: boolean;
}

export interface Author {
    id: string;
    display_name: string;
    orcid: string | null;
}

export interface Authorship {
    author_position: string;
    author: Author;
    institutions: Institution[];
    countries: string[];
    is_corresponding: boolean;
    raw_author_name: string;
    raw_affiliation_strings: string[];
    affiliations: Affiliation[];
}

export interface Institution {
    id: string;
    display_name: string;
    ror: string;
    country_code: string;
    type: string;
    lineage: string[];
}

export interface Affiliation {
    raw_affiliation_string: string;
    institution_ids: string[];
}

export interface CitationPercentileYear {
    min: number;
    max: number;
}

export interface Biblio {
    volume: string | null;
    issue: string | null;
    first_page: string | null;
    last_page: string | null;
}

export interface Concept {
    id: string;
    wikidata: string;
    display_name: string;
    level: number;
    score: number;
}

export interface Keyword {
    id: string;
    display_name: string;
    score: number;
}

export interface Location {
    is_oa: boolean;
    landing_page_url: string;
    pdf_url: string | null;
    source: Source | null;
    license: string | null;
    license_id: string | null;
    version: string | null;
    is_accepted: boolean;
    is_published: boolean;
}

export interface CitedByPercentileYear {
    min: number;
    max: number;
}

export interface Result {
    id: string;
    doi: string;
    title: string;
    display_name: string;
    relevance_score: number;
    publication_year: number;
    publication_date: string;
    ids: IDs;
    language: string;
    primary_location: PrimaryLocation;
    type: string;
    type_crossref: string;
    indexed_in: string[];
    open_access: OpenAccess;
    authorships: Authorship[];
    institution_assertions: string[];
    countries_distinct_count: number;
    institutions_distinct_count: number;
    corresponding_author_ids: string[];
    corresponding_institution_ids: string[];
    apc_list: Apc | null;
    apc_paid: Apc | null;
    fwci: number | null;
    has_fulltext: boolean;
    cited_by_count: number;
    citation_normalized_percentile: number | null;
    cited_by_percentile_year: CitedByPercentileYear;
    biblio: Biblio;
    is_retracted: boolean;
    is_paratext: boolean;
    primary_topic: string | null;
    topics: Concept[];
    keywords: Keyword[];
    concepts: Concept[];
    mesh: Mesh[];
    locations_count: number;
    locations: Location[];
    best_oa_location: Location | null;
    sustainable_development_goals: SustainableDevelopmentGoal[];
    grants: Grant[];
    datasets: string[];
    versions: string[];
    referenced_works_count: number;
    referenced_works: string[];
    related_works: string[];
    abstract_inverted_index: Record<string, number[]>;
    cited_by_api_url: string;
    counts_by_year: CountByYear[];
    updated_date: string;
    created_date: string;
}

export interface Apc {
    value: number;
    currency: string;
    value_usd: number;
    provenance: string;
}

export interface Mesh {
    descriptor_ui: string;
    descriptor_name: string;
    qualifier_ui: string;
    qualifier_name: string | null;
    is_major_topic: boolean;
}

export interface SustainableDevelopmentGoal {
    id: string;
    score: number;
    display_name: string;
}

export interface Grant {
    funder: string;
    funder_display_name: string;
    award_id: string;
}

export interface CountByYear {
    year: number;
    cited_by_count: number;
}

export interface OpenAlexWorkResponse {
    meta: Meta;
    results: Result[];
    group_by: string[];
}
