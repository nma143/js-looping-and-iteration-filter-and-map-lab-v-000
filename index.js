// Code your solution here:
function driversWithRevenueOver(drivers, revenue)
{
  const driversWithEnoughRevenue = drivers.filter(driver => driver.revenue > revenue);
  return driversWithEnoughRevenue;
}
function driverNamesWithRevenueOver(drivers, revenue)
{
  const driverNamesWithEnoughRevenue = driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
  return driverNamesWithEnoughRevenue;

}
function exactMatch(driver, obj)
{
  const newDrivers =
}
function exactMatchToList()
{

}
