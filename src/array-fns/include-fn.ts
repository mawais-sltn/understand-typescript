function main() {
  const tenantIds = [45, 26, 56, 98, 87, 145, 1245, 5454, 548, 4845];
  const tenantsWithFreshCommitments = [145, 1245, 5454, 548, 4845];

  const notInclude = tenantIds
    .filter((tenant) => !tenantsWithFreshCommitments.includes(tenant))
    .map((tenantId) => tenantId);

  const include = tenantIds
    .filter((tenant) => tenantsWithFreshCommitments.includes(tenant))
    .map((tenantId) => tenantId);

  console.log('notInclude :: ', notInclude);
  console.log('include :: ', include);

  const configurationElasticsearchVersion = 'OpenSearch_1.1';
  console.log(configurationElasticsearchVersion.toLowerCase().includes('opensearch'));
}

main();
