// A sample set of family tree data with 5 generations and no gaps.

export const familyTreeData = {
  rootPerson: 'p0001',

  p0001:
    {
      firstname: 'Aaron',
      lastname: 'Adams',
      gender: 'male',
      generation: 0,
      birthdate: '07-may-1957',
      fatherId: 'p0002',
      motherId: 'p0017',
      spouseId: null,
      childId: null
    },

  p0002:
    {
      firstname: 'James',
      lastname: 'Adams',
      gender: 'male',
      generation: 1,
      birthdate: '06-oct-1932',
      deathdate: '2010',
      fatherId: 'p0003',
      motherId: 'p0004',
      spouseId: 'p0017',
      childId: 'p0001'
    },

  p0003:
    {
      firstname: 'Robert',
      lastname: 'Adams',
      gender: 'male',
      generation: 2,
      birthdate: '21-nov-1908',
      deathdate: '1985',
      fatherId: 'p0005',
      motherId: 'p0006',
      spouseId: 'p0004',
      childId: 'p0002'
    },

  p0004:
    {
      firstname: 'Susan',
      lastname: 'Eaton',
      gender: 'female',
      generation: 2,
      birthdate: '27-sep-1911',
      deathdate: '1991',
      fatherId: 'p0007',
      motherId: 'p0008',
      spouseId: 'p0003',
      childId: 'p0002'
    },

  p0005:
    {
      firstname: 'David',
      lastname: 'Adams',
      gender: 'male',
      generation: 3,
      birthdate: '12-sep-1874',
      deathdate: '1939',
      fatherId: 'p0009',
      motherId: 'p0010',
      spouseId: 'p0006',
      childId: 'p0003'
    },

  p0006:
    {
      firstname: 'Nancy',
      lastname: 'Cole',
      gender: 'female',
      generation: 3,
      birthdate: '02-jan-1884',
      deathdate: '1951',
      fatherId: 'p0011',
      motherId: 'p0012',
      spouseId: 'p0005',
      childId: 'p0003'
    },

  p0007:
    {
      firstname: 'William',
      lastname: 'Eaton',
      gender: 'male',
      generation: 3,
      birthdate: '08-aug-1875',
      deathdate: '1960',
      fatherId: 'p0013',
      motherId: 'p0014',
      spouseId: 'p0008',
      childId: 'p0004'
    },

  p0008:
    {
      firstname: 'Karen',
      lastname: 'Gibson',
      gender: 'female',
      generation: 3,
      birthdate: '19-jun-1882',
      deathdate: '1967',
      fatherId: 'p0015',
      motherId: 'p0016',
      spouseId: 'p0007',
      childId: 'p0004'
    },

  p0009:
    {
      firstname: 'Joseph',
      lastname: 'Adams',
      gender: 'male',
      generation: 4,
      birthdate: '13-mar-1847',
      deathdate: '1922',
      fatherId: 'p0501',
      motherId: 'p0502',
      spouseId: 'p0010',
      childId: 'p0005'
    },

  p0010:
    {
      firstname: 'Diane',
      lastname: 'Baker',
      gender: 'female',
      generation: 4,
      birthdate: '03-jul-1852',
      deathdate: '1936',
      fatherId: 'p0503',
      motherId: 'p0504',
      spouseId: 'p0009',
      childId: 'p0005'
    },

  p0011:
    {
      firstname: 'David',
      lastname: 'Cole',
      gender: 'male',
      generation: 4,
      birthdate: '25-apr-1850',
      deathdate: '1894',
      fatherId: 'p0505',
      motherId: 'p0506',
      spouseId: 'p0012',
      childId: 'p0006'
    },

  p0012:
    {
      firstname: 'Pamela',
      lastname: 'Davis',
      gender: 'female',
      generation: 4,
      birthdate: '31-may-1848',
      deathdate: '1912',
      fatherId: 'p0507',
      motherId: 'p0508',
      spouseId: 'p0011',
      childId: 'p0006'
    },

  p0013:
    {
      firstname: 'Dennis',
      lastname: 'Eaton',
      gender: 'male',
      generation: 4,
      birthdate: '09-feb-1850',
      deathdate: '1941',
      fatherId: 'p0509',
      motherId: 'p0510',
      spouseId: 'p0014',
      childId: 'p0007'
    },

  p0014:
    {
      firstname: 'Janet',
      lastname: 'Ford',
      gender: 'female',
      generation: 4,
      birthdate: '20-sep-1852',
      deathdate: '1943',
      fatherId: 'p0511',
      motherId: 'p0512',
      spouseId: 'p0013',
      childId: 'p0007'
    },

  p0015:
    {
      firstname: 'Paul',
      lastname: 'Gibson',
      gender: 'male',
      generation: 4,
      birthdate: '11-nov-1849',
      deathdate: '1908',
      fatherId: 'p0513',
      motherId: 'p0514',
      spouseId: 'p0016',
      childId: 'p0008'
    },

  p0016:
    {
      firstname: 'Betty',
      lastname: 'Harris',
      gender: 'female',
      generation: 4,
      birthdate: '26-aug-1849',
      deathdate: '1916',
      fatherId: 'p0515',
      motherId: 'p0516',
      spouseId: 'p0015',
      childId: 'p0008'
    },

  p0017:
    {
      firstname: 'Barbara',
      lastname: 'Johnson',
      gender: 'female',
      generation: 1,
      birthdate: '28-mar-1930',
      deathdate: '2004',
      fatherId: 'p0018',
      motherId: 'p0019',
      spouseId: 'p0002',
      childId: 'p0001'
    },

  p0018:
    {
      firstname: 'Michael',
      lastname: 'Johnson',
      gender: 'male',
      generation: 2,
      birthdate: '14-may-1897',
      deathdate: '1982',
      fatherId: 'p0020',
      motherId: 'p0021',
      spouseId: 'p0019',
      childId: 'p0017'
    },

  p0019:
    {
      firstname: 'Carol',
      lastname: 'Nichols',
      gender: 'female',
      generation: 2,
      birthdate: '18-apr-1900',
      deathdate: '1989',
      fatherId: 'p0022',
      motherId: 'p0023',
      spouseId: 'p0018',
      childId: 'p0017'
    },

  p0020:
    {
      firstname: 'Richard',
      lastname: 'Johnson',
      gender: 'male',
      generation: 3,
      birthdate: '29-oct-1876',
      deathdate: '1915',
      fatherId: 'p0024',
      motherId: 'p0025',
      spouseId: 'p0021',
      childId: 'p0018'
    },

  p0021:
    {
      firstname: 'Donna',
      lastname: 'Larson',
      gender: 'female',
      generation: 3,
      birthdate: '15-feb-1876',
      deathdate: '1934',
      fatherId: 'p0026',
      motherId: 'p0027',
      spouseId: 'p0020',
      childId: 'p0018'
    },

  p0022:
    {
      firstname: 'Thomas',
      lastname: 'Nichols',
      gender: 'male',
      generation: 3,
      birthdate: '22-jan-1877',
      deathdate: '1938',
      fatherId: 'p0028',
      motherId: 'p0029',
      spouseId: 'p0023',
      childId: 'p0019'
    },

  p0023:
    {
      firstname: 'Brenda',
      lastname: 'Ross',
      gender: 'female',
      generation: 3,
      birthdate: '04-jul-1876',
      deathdate: '1939',
      fatherId: 'p0030',
      motherId: 'p0031',
      spouseId: 'p0022',
      childId: 'p0019'
    },

  p0024:
    {
      firstname: 'George',
      lastname: 'Johnson',
      gender: 'male',
      generation: 4,
      birthdate: '30-dec-1849',
      deathdate: '1899',
      fatherId: 'p0517',
      motherId: 'p0518',
      spouseId: 'p0025',
      childId: 'p0020'
    },

  p0025:
    {
      firstname: 'Judith',
      lastname: 'Kagan',
      gender: 'female',
      generation: 4,
      birthdate: '10-jun-1854',
      deathdate: '1933',
      fatherId: 'p0519',
      motherId: 'p0520',
      spouseId: 'p0024',
      childId: 'p0020'
    },

  p0026:
    {
      firstname: 'Mark',
      lastname: 'Larson',
      gender: 'male',
      generation: 4,
      birthdate: '01-dec-1851',
      deathdate: '1946',
      fatherId: 'p0521',
      motherId: 'p0522',
      spouseId: 'p0027',
      childId: 'p0021'
    },

  p0027:
    {
      firstname: 'Cynthia',
      lastname: 'Miller',
      gender: 'female',
      generation: 4,
      birthdate: '17-jan-1856',
      deathdate: '1928',
      fatherId: 'p0523',
      motherId: 'p0524',
      spouseId: 'p0026',
      childId: 'p0021'
    },

  p0028:
    {
      firstname: 'Roger',
      lastname: 'Nichols',
      gender: 'male',
      generation: 4,
      birthdate: '16-nov-1851',
      deathdate: '1911',
      fatherId: 'p0525',
      motherId: 'p0526',
      spouseId: 'p0029',
      childId: 'p0022'
    },

  p0029:
    {
      firstname: 'Martha',
      lastname: 'Parker',
      gender: 'female',
      generation: 4,
      birthdate: '23-apr-1852',
      deathdate: '1914',
      fatherId: 'p0527',
      motherId: 'p0528',
      spouseId: 'p0028',
      childId: 'p0022'
    },

  p0030:
    {
      firstname: 'Peter',
      lastname: 'Ross',
      gender: 'male',
      generation: 4,
      birthdate: '05-jun-1851',
      deathdate: '1937',
      fatherId: 'p0529',
      motherId: 'p0530',
      spouseId: 'p0031',
      childId: 'p0023'
    },

  p0031:
    {
      firstname: 'Bonnie',
      lastname: 'Shaw',
      gender: 'female',
      generation: 4,
      birthdate: '24-aug-1850',
      deathdate: '1946',
      fatherId: 'p0531',
      motherId: 'p0532',
      spouseId: 'p0030',
      childId: 'p0023'
    },

  p0501:
    {
      firstname: 'Joshua',
      lastname: 'Adams',
      gender: 'male',
      generation: 5,
      birthdate: '1821',
      deathdate: '1888',
      fatherId: null,
      motherId: null,
      spouseId: 'p0502',
      childId: 'p0009'
    },

  p0502:
    {
      firstname: 'Lynette',
      lastname: 'Young',
      gender: 'female',
      generation: 5,
      birthdate: '1825',
      deathdate: '1869',
      fatherId: null,
      motherId: null,
      spouseId: 'p0501',
      childId: 'p0009'
    },

  p0503:
    {
      firstname: 'Arthur',
      lastname: 'Baker',
      gender: 'male',
      generation: 5,
      birthdate: '1826',
      deathdate: '1894',
      fatherId: null,
      motherId: null,
      spouseId: 'p0504',
      childId: 'p0010'
    },

  p0504:
    {
      firstname: 'Penny',
      lastname: 'Vann',
      gender: 'female',
      generation: 5,
      birthdate: '1830',
      deathdate: '1907',
      fatherId: null,
      motherId: null,
      spouseId: 'p0503',
      childId: 'p0010'
    },

  p0505:
    {
      firstname: 'Howard',
      lastname: 'Cole',
      gender: 'male',
      generation: 5,
      birthdate: '1824',
      deathdate: '1912',
      fatherId: null,
      motherId: null,
      spouseId: 'p0506',
      childId: 'p0011'
    },

  p0506:
    {
      firstname: 'Bernadette',
      lastname: 'Walter',
      gender: 'female',
      generation: 5,
      birthdate: '1828',
      deathdate: '1912',
      fatherId: null,
      motherId: null,
      spouseId: 'p0505',
      childId: 'p0011'
    },

  p0507:
    {
      firstname: 'Sheldon',
      lastname: 'Davis',
      gender: 'male',
      generation: 5,
      birthdate: '1822',
      deathdate: '1863',
      fatherId: null,
      motherId: null,
      spouseId: 'p0508',
      childId: 'p0012'
    },

  p0508:
    {
      firstname: 'Amelia',
      lastname: 'Yorba',
      gender: 'female',
      generation: 5,
      birthdate: '1826',
      deathdate: '1879',
      fatherId: null,
      motherId: null,
      spouseId: 'p0507',
      childId: 'p0012'
    },

  p0509:
    {
      firstname: 'Jerome',
      lastname: 'Eaton',
      gender: 'male',
      generation: 5,
      birthdate: '1824',
      deathdate: '1900',
      fatherId: null,
      motherId: null,
      spouseId: 'p0510',
      childId: 'p0013'
    },

  p0510:
    {
      firstname: 'Elaine',
      lastname: 'Waring',
      gender: 'female',
      generation: 5,
      birthdate: '1828',
      deathdate: '1910',
      fatherId: null,
      motherId: null,
      spouseId: 'p0509',
      childId: 'p0013'
    },

  p0511:
    {
      firstname: 'Harry',
      lastname: 'Ford',
      gender: 'male',
      generation: 5,
      birthdate: '1826',
      deathdate: '1884',
      fatherId: null,
      motherId: null,
      spouseId: 'p0512',
      childId: 'p0014'
    },

  p0512:
    {
      firstname: 'Sally',
      lastname: 'Verona',
      gender: 'female',
      generation: 5,
      birthdate: '1830',
      deathdate: '1897',
      fatherId: null,
      motherId: null,
      spouseId: 'p0511',
      childId: 'p0014'
    },

  p0513:
    {
      firstname: 'Daniel',
      lastname: 'Gibson',
      gender: 'male',
      generation: 5,
      birthdate: '1823',
      deathdate: '1898',
      fatherId: null,
      motherId: null,
      spouseId: 'p0514',
      childId: 'p0015'
    },

  p0514:
    {
      firstname: 'Celeste',
      lastname: 'Yang',
      gender: 'female',
      generation: 5,
      birthdate: '1827',
      deathdate: '1905',
      fatherId: null,
      motherId: null,
      spouseId: 'p0513',
      childId: 'p0015'
    },

  p0515:
    {
      firstname: 'Paul',
      lastname: 'Harris',
      gender: 'male',
      generation: 5,
      birthdate: '1823',
      deathdate: '1917',
      fatherId: null,
      motherId: null,
      spouseId: 'p0516',
      childId: 'p0016'
    },

  p0516:
    {
      firstname: 'Ginger',
      lastname: 'Zimmerman',
      gender: 'female',
      generation: 5,
      birthdate: '1827',
      deathdate: '1914',
      fatherId: null,
      motherId: null,
      spouseId: 'p0515',
      childId: 'p0016'
    },

  p0517:
    {
      firstname: 'Marcus',
      lastname: 'Johnson',
      gender: 'male',
      generation: 5,
      birthdate: '1819',
      deathdate: '1877',
      fatherId: null,
      motherId: null,
      spouseId: 'p0518',
      childId: 'p0024'
    },

  p0518:
    {
      firstname: 'Melissa',
      lastname: 'Torsen',
      gender: 'female',
      generation: 5,
      birthdate: '1818',
      deathdate: '1877',
      fatherId: null,
      motherId: null,
      spouseId: 'p0517',
      childId: 'p0024'
    },

  p0519:
    {
      firstname: 'George',
      lastname: 'Kagan',
      gender: 'male',
      generation: 5,
      birthdate: '1829',
      deathdate: '1893',
      fatherId: null,
      motherId: null,
      spouseId: 'p0520',
      childId: 'p0025'
    },

  p0520:
    {
      firstname: 'Nancy',
      lastname: 'Wendell',
      gender: 'female',
      generation: 5,
      birthdate: '1831',
      deathdate: '1897',
      fatherId: null,
      motherId: null,
      spouseId: 'p0519',
      childId: 'p0025'
    },

  p0521:
    {
      firstname: 'Wayne',
      lastname: 'Larson',
      gender: 'male',
      generation: 5,
      birthdate: '1822',
      deathdate: '1890',
      fatherId: null,
      motherId: null,
      spouseId: 'p0522',
      childId: 'p0026'
    },

  p0522:
    {
      firstname: 'Henrietta',
      lastname: 'Vander',
      gender: 'female',
      generation: 5,
      birthdate: '1825',
      deathdate: '1888',
      fatherId: null,
      motherId: null,
      spouseId: 'p0521',
      childId: 'p0026'
    },

  p0523:
    {
      firstname: 'Eric',
      lastname: 'Miller',
      gender: 'male',
      generation: 5,
      birthdate: '1831',
      deathdate: '1911',
      fatherId: null,
      motherId: null,
      spouseId: 'p0524',
      childId: 'p0027'
    },

  p0524:
    {
      firstname: 'Eliza',
      lastname: 'Tucker',
      gender: 'female',
      generation: 5,
      birthdate: '1829',
      deathdate: '1889',
      fatherId: null,
      motherId: null,
      spouseId: 'p0523',
      childId: 'p0027'
    },

  p0525:
    {
      firstname: 'Trevor',
      lastname: 'Nichols',
      gender: 'male',
      generation: 5,
      birthdate: '1825',
      deathdate: '1902',
      fatherId: null,
      motherId: null,
      spouseId: 'p0526',
      childId: 'p0028'
    },

  p0526:
    {
      firstname: 'Opal',
      lastname: 'Williams',
      gender: 'female',
      generation: 5,
      birthdate: '1831',
      deathdate: '1906',
      fatherId: null,
      motherId: null,
      spouseId: 'p0525',
      childId: 'p0028'
    },

  p0527:
    {
      firstname: 'Charles',
      lastname: 'Parker',
      gender: 'male',
      generation: 5,
      birthdate: '1822',
      deathdate: '1870',
      fatherId: null,
      motherId: null,
      spouseId: 'p0528',
      childId: 'p0029'
    },

  p0528:
    {
      firstname: 'Laura',
      lastname: 'Zola',
      gender: 'female',
      generation: 5,
      birthdate: '1821',
      deathdate: '1890',
      fatherId: null,
      motherId: null,
      spouseId: 'p0527',
      childId: 'p0029'
    },

  p0529:
    {
      firstname: 'Gerald',
      lastname: 'Ross',
      gender: 'male',
      generation: 5,
      birthdate: '1824',
      deathdate: '1899',
      fatherId: null,
      motherId: null,
      spouseId: 'p0530',
      childId: 'p0030'
    },

  p0530:
    {
      firstname: 'Rachel',
      lastname: 'Zander',
      gender: 'female',
      generation: 5,
      birthdate: '1825',
      deathdate: '1901',
      fatherId: null,
      motherId: null,
      spouseId: 'p0529',
      childId: 'p0030'
    },

  p0531:
    {
      firstname: 'Thomas',
      lastname: 'Shaw',
      gender: 'male',
      generation: 5,
      birthdate: '1828',
      deathdate: '1895',
      fatherId: null,
      motherId: null,
      spouseId: 'p0532',
      childId: 'p0031'
    },

  p0532:
    {
      firstname: 'Regina',
      lastname: 'Thomas',
      gender: 'female',
      generation: 5,
      birthdate: '1831',
      deathdate: '1896',
      fatherId: null,
      motherId: null,
      spouseId: 'p0531',
      childId: 'p0031'
    }

}
