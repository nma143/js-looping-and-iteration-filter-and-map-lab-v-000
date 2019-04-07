// Code your solution here:
function driversWithRevenueOver(drivers, revenue)
{
  const newDrivers = drivers.filter(driver => driver.revenue > revenue);
  return newDrivers;
}
function driverNamesWithRevenueOver(drivers, revenue)
{
  const newDrivers = driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
  return newDrivers;

}
function exactMatch()
{

}
function exactMatchToList()
{

}
