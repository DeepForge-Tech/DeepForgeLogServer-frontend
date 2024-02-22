import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

function Dashboard() {
  const [isAuth, setIsAuth] = useState(true)
  useEffect(() => {
    const authCheck = async () => {
      try {
        if (Cookies.get('Authorization')) {
          // window.location.href = "/";
          setIsAuth(true);
        }
        else {
          setIsAuth(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setIsAuth(false);
      }
    };

    authCheck();
  }, []);
  if (isAuth == false)
  {
    return <Navigate to={"/login"} />
  }
  else
  {
    return (
      <>
        <h1>Dashboard</h1>
        <p className="read-the-docs">

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra risus felis, eget varius nisl ullamcorper non. Cras fringilla eros eget aliquet aliquam. Fusce hendrerit tellus sollicitudin, rhoncus lorem a, consequat massa. Mauris et metus dui. Ut tempor, quam ac consequat varius, enim massa accumsan lorem, ac sagittis est felis id massa. Aenean fringilla, odio quis venenatis sodales, nibh ante tincidunt mi, et pharetra nibh lorem iaculis felis. Donec maximus orci sed malesuada dictum. Maecenas pharetra augue vel fermentum varius. Morbi semper diam a pretium vulputate. Sed malesuada, nulla ac ultricies ultrices, mauris arcu mattis lorem, ut dictum dui leo sed mi. Vivamus eget lacus tempus, feugiat felis nec, pellentesque justo. Mauris neque urna, pretium non tortor a, faucibus vulputate velit.

          Pellentesque vel lacinia lacus, non tincidunt lorem. Aenean eget suscipit velit, eu sagittis mauris. Morbi rutrum vel lectus sed placerat. Donec eleifend velit vel felis tincidunt commodo. Aenean luctus imperdiet massa. Sed id lobortis risus, et dignissim lorem. Nunc mattis faucibus arcu vel mollis. Suspendisse in mauris purus. Suspendisse potenti. Nam vel bibendum quam. Aenean nisl eros, rutrum eu ultricies at, vestibulum in odio. Nam nec sapien scelerisque, dictum nunc a, aliquam dolor. Cras ullamcorper dui nisi, sed cursus erat rutrum a. Quisque cursus turpis in enim hendrerit facilisis. Etiam non velit libero.

          Duis diam ex, ullamcorper viverra purus at, sagittis volutpat tellus. Quisque egestas vehicula lorem, sit amet iaculis eros malesuada vitae. Nulla ultricies nunc vel nunc pellentesque semper. Morbi sed eleifend orci. Sed consequat nunc ac massa scelerisque suscipit. Quisque sit amet magna ultrices, iaculis purus sed, auctor tellus. Proin gravida convallis egestas. Nunc efficitur ipsum eu faucibus vulputate. Sed id lectus ipsum. Mauris commodo nunc mi, ac feugiat nisi bibendum nec. Integer mattis, nisi non congue placerat, dui nisi suscipit velit, auctor aliquet ante quam sit amet sem.

          Mauris at mi in sapien consectetur aliquet sed quis dui. Mauris ac ullamcorper velit. Morbi dictum purus ac viverra sodales. Aliquam porta erat eu posuere consequat. Nunc euismod porttitor ex, in consectetur lectus porttitor nec. Suspendisse dapibus arcu eget nisl pulvinar, non faucibus ante faucibus. Integer euismod pretium turpis vel gravida. Proin sagittis iaculis leo, at vestibulum neque fermentum quis. Aliquam lacinia nibh vitae sodales consequat. Etiam accumsan elit eu luctus sodales.

          Morbi vitae augue hendrerit, elementum metus eu, accumsan mauris. Praesent in mi accumsan, pharetra purus vel, iaculis leo. Cras in mi eget arcu sagittis commodo. Praesent egestas dignissim velit ac varius. Aenean non risus in elit eleifend fermentum. Aenean sed volutpat augue. Vivamus et volutpat mi. Cras lacus leo, consequat sit amet tempor ut, viverra sit amet nisi.
        </p>
        <p className="read-the-docs">

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra risus felis, eget varius nisl ullamcorper non. Cras fringilla eros eget aliquet aliquam. Fusce hendrerit tellus sollicitudin, rhoncus lorem a, consequat massa. Mauris et metus dui. Ut tempor, quam ac consequat varius, enim massa accumsan lorem, ac sagittis est felis id massa. Aenean fringilla, odio quis venenatis sodales, nibh ante tincidunt mi, et pharetra nibh lorem iaculis felis. Donec maximus orci sed malesuada dictum. Maecenas pharetra augue vel fermentum varius. Morbi semper diam a pretium vulputate. Sed malesuada, nulla ac ultricies ultrices, mauris arcu mattis lorem, ut dictum dui leo sed mi. Vivamus eget lacus tempus, feugiat felis nec, pellentesque justo. Mauris neque urna, pretium non tortor a, faucibus vulputate velit.

          Pellentesque vel lacinia lacus, non tincidunt lorem. Aenean eget suscipit velit, eu sagittis mauris. Morbi rutrum vel lectus sed placerat. Donec eleifend velit vel felis tincidunt commodo. Aenean luctus imperdiet massa. Sed id lobortis risus, et dignissim lorem. Nunc mattis faucibus arcu vel mollis. Suspendisse in mauris purus. Suspendisse potenti. Nam vel bibendum quam. Aenean nisl eros, rutrum eu ultricies at, vestibulum in odio. Nam nec sapien scelerisque, dictum nunc a, aliquam dolor. Cras ullamcorper dui nisi, sed cursus erat rutrum a. Quisque cursus turpis in enim hendrerit facilisis. Etiam non velit libero.

          Duis diam ex, ullamcorper viverra purus at, sagittis volutpat tellus. Quisque egestas vehicula lorem, sit amet iaculis eros malesuada vitae. Nulla ultricies nunc vel nunc pellentesque semper. Morbi sed eleifend orci. Sed consequat nunc ac massa scelerisque suscipit. Quisque sit amet magna ultrices, iaculis purus sed, auctor tellus. Proin gravida convallis egestas. Nunc efficitur ipsum eu faucibus vulputate. Sed id lectus ipsum. Mauris commodo nunc mi, ac feugiat nisi bibendum nec. Integer mattis, nisi non congue placerat, dui nisi suscipit velit, auctor aliquet ante quam sit amet sem.

          Mauris at mi in sapien consectetur aliquet sed quis dui. Mauris ac ullamcorper velit. Morbi dictum purus ac viverra sodales. Aliquam porta erat eu posuere consequat. Nunc euismod porttitor ex, in consectetur lectus porttitor nec. Suspendisse dapibus arcu eget nisl pulvinar, non faucibus ante faucibus. Integer euismod pretium turpis vel gravida. Proin sagittis iaculis leo, at vestibulum neque fermentum quis. Aliquam lacinia nibh vitae sodales consequat. Etiam accumsan elit eu luctus sodales.

          Morbi vitae augue hendrerit, elementum metus eu, accumsan mauris. Praesent in mi accumsan, pharetra purus vel, iaculis leo. Cras in mi eget arcu sagittis commodo. Praesent egestas dignissim velit ac varius. Aenean non risus in elit eleifend fermentum. Aenean sed volutpat augue. Vivamus et volutpat mi. Cras lacus leo, consequat sit amet tempor ut, viverra sit amet nisi.
        </p>
        <p className="read-the-docs">

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra risus felis, eget varius nisl ullamcorper non. Cras fringilla eros eget aliquet aliquam. Fusce hendrerit tellus sollicitudin, rhoncus lorem a, consequat massa. Mauris et metus dui. Ut tempor, quam ac consequat varius, enim massa accumsan lorem, ac sagittis est felis id massa. Aenean fringilla, odio quis venenatis sodales, nibh ante tincidunt mi, et pharetra nibh lorem iaculis felis. Donec maximus orci sed malesuada dictum. Maecenas pharetra augue vel fermentum varius. Morbi semper diam a pretium vulputate. Sed malesuada, nulla ac ultricies ultrices, mauris arcu mattis lorem, ut dictum dui leo sed mi. Vivamus eget lacus tempus, feugiat felis nec, pellentesque justo. Mauris neque urna, pretium non tortor a, faucibus vulputate velit.

          Pellentesque vel lacinia lacus, non tincidunt lorem. Aenean eget suscipit velit, eu sagittis mauris. Morbi rutrum vel lectus sed placerat. Donec eleifend velit vel felis tincidunt commodo. Aenean luctus imperdiet massa. Sed id lobortis risus, et dignissim lorem. Nunc mattis faucibus arcu vel mollis. Suspendisse in mauris purus. Suspendisse potenti. Nam vel bibendum quam. Aenean nisl eros, rutrum eu ultricies at, vestibulum in odio. Nam nec sapien scelerisque, dictum nunc a, aliquam dolor. Cras ullamcorper dui nisi, sed cursus erat rutrum a. Quisque cursus turpis in enim hendrerit facilisis. Etiam non velit libero.

          Duis diam ex, ullamcorper viverra purus at, sagittis volutpat tellus. Quisque egestas vehicula lorem, sit amet iaculis eros malesuada vitae. Nulla ultricies nunc vel nunc pellentesque semper. Morbi sed eleifend orci. Sed consequat nunc ac massa scelerisque suscipit. Quisque sit amet magna ultrices, iaculis purus sed, auctor tellus. Proin gravida convallis egestas. Nunc efficitur ipsum eu faucibus vulputate. Sed id lectus ipsum. Mauris commodo nunc mi, ac feugiat nisi bibendum nec. Integer mattis, nisi non congue placerat, dui nisi suscipit velit, auctor aliquet ante quam sit amet sem.

          Mauris at mi in sapien consectetur aliquet sed quis dui. Mauris ac ullamcorper velit. Morbi dictum purus ac viverra sodales. Aliquam porta erat eu posuere consequat. Nunc euismod porttitor ex, in consectetur lectus porttitor nec. Suspendisse dapibus arcu eget nisl pulvinar, non faucibus ante faucibus. Integer euismod pretium turpis vel gravida. Proin sagittis iaculis leo, at vestibulum neque fermentum quis. Aliquam lacinia nibh vitae sodales consequat. Etiam accumsan elit eu luctus sodales.

          Morbi vitae augue hendrerit, elementum metus eu, accumsan mauris. Praesent in mi accumsan, pharetra purus vel, iaculis leo. Cras in mi eget arcu sagittis commodo. Praesent egestas dignissim velit ac varius. Aenean non risus in elit eleifend fermentum. Aenean sed volutpat augue. Vivamus et volutpat mi. Cras lacus leo, consequat sit amet tempor ut, viverra sit amet nisi.
        </p>
      </>
    );
  }
};

export default Dashboard;